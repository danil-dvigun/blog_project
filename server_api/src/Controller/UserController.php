<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class UserController extends AbstractController
{

    public function user(): Response
    {
        $userData = $this->getUser();
        $response = new Response();
        $response->setContent(json_encode(["user" => $userData->getUsername()]));
        $response->setStatusCode(Response::HTTP_OK );
        return $response;
    }
}