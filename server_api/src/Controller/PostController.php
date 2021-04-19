<?php

namespace App\Controller;

use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends AbstractController
{
    /**
     * @Route("/posts", name="posts")
     */
    public function posts(PostRepository $postRepository): Response
    {


        $posts = $postRepository->findAll();

        $response = new Response();
        $response->setContent(json_encode(['data' => $posts]));
        $response->setStatusCode(Response::HTTP_OK );
        return $response;
        /*return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/PostController.php',
        ]);*/
    }
}
