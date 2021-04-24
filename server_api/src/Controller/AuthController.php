<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\DBAL\Exception;
use Doctrine\ORM\EntityManagerInterface;
use ErrorException;
use ReallySimpleJWT\Token;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\User\UserInterface;


class AuthController extends AbstractController
{
    /**
     * @Route("/login", name="login", methods={"POST"})
     */
    public function login(Request $request, UserPasswordEncoderInterface $encoder): Response
    {
        try{
            $userData = json_decode($request->getContent());
            $user = $this->getDoctrine()->getRepository(User::class)->findOneBy(array('email' => $userData->email));

            $verifyPassword = password_verify($userData->password . $user->getSalt(), $user->getPassword());
            if(!$verifyPassword){
                throw new ErrorException("Wrong Password!", 400);
            }

            $userId = $user->getId();
            $secret = 'sec!ReT423*&';
            $expiration = time() + 86400;
            $issuer = 'localhost';

            $token = Token::create($userId, $secret, $expiration, $issuer);

            $response = new Response();
            $response->headers->set('Authorization', $token);
            $response->setContent(json_encode(['user' => $user->getName()]));
            $response->setStatusCode(Response::HTTP_OK );
            return $response;
        }
        catch(\Exception $error){
            error_log($error->getMessage());
            $response = new Response();
            $response->setContent(json_encode(['error' => $error->getMessage()]));
            $response->setStatusCode($error->getCode());
            return $response;
        }
    }

    /**
     * @Route("/registration", name="registration", methods={"POST"})
     */
    public function registration(Request $request, EntityManagerInterface $entityManager, UserRepository &$userRepository): Response
    {
        try{
            $userData = json_decode($request->getContent());

            $checkUser = $userRepository->findBy(array('email' => $userData->email));
            if(count($checkUser) > 0){
                throw new Exception("Such mail is already registered", 400);
            }

            $user = new User();
            $user->setName($userData->name);
            $user->setEmail($userData->email);

            $salt = base64_encode(random_bytes(15));
            $hash = password_hash($userData->password . $salt, PASSWORD_DEFAULT, ['cost' => 15]);
            /*$user = new User($data->login, $hash, $salt);*/

            $user->setPassword($hash);
            $user->setSalt($salt);
            $user->setRoles(["user"]);

            $entityManager->persist($user);
            $entityManager->flush();

            $userId = $user->getId();
            $secret = 'sec!ReT423*&';
            $expiration = time() + 86400;
            $issuer = 'localhost';

            $token = Token::create($userId, $secret, $expiration, $issuer);

            $response = new Response();
            $response->headers->set('Authorization', $token);
            //$response->setContent(json_encode(['result' => "success", 'token' => $token]));
            $response->setContent(json_encode(['user' => $user->getName()]));
            $response->setStatusCode(Response::HTTP_OK );
            return $response;
        }
        catch(\Exception $error){
            error_log($error->getMessage());
            $response = new Response();
            $response->setContent(json_encode(['error' => $error->getMessage()]));
            $response->setStatusCode($error->getCode());
            return $response;
        }
    }
}
