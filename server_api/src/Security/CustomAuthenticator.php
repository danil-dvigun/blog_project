<?php

namespace App\Security;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use ErrorException;
use ReallySimpleJWT\Token;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;

class CustomAuthenticator extends AbstractGuardAuthenticator
{
    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }
    public function supports(Request $request)
    {
        return stristr($request->getPathInfo(), '/api/');
    }

    public function getCredentials(Request $request)
    {
        /*
         * ПЕРЕДЕЛАТЬ
         */
        $token = $request->headers->get('Authorization');
        $credentials = false;
        if(!is_null($token)){
            $secret = 'sec!ReT423*&';
            $check = Token::validateExpiration($token, $secret);
            if($check){
                $credentials = Token::getPayload($token, $secret);
            }
        }
        if($credentials){
            $request->credentials = $credentials;
        }
        return $credentials;
    }

    public function getUser($credentials, UserProviderInterface $userProvider)
    {
        if(!$credentials){
            return null;
        }
        else{
            $user = $this->entityManager->getRepository(User::class)->findOneBy(['id' => $credentials['user_id']]);
        }
        if (!$user) {
            return null;
        }
        /*$asdads = new User();*/
        return $user;
    }

    public function checkCredentials($credentials, UserInterface $user)
    {
        return true;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        throw new $exception;
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $providerKey)
    {
        return null;
    }

    public function start(Request $request, AuthenticationException $authException = null)
    {
        $response = new Response();
        $response->setContent(json_encode(['error' => "Unauthorized"]));
        $response->setStatusCode(401);
        return $response;
        // todo
    }

    public function supportsRememberMe()
    {
        // todo
    }
}
