<?php

namespace App\Controller;

use App\Dto\Response\Transformer\PostResponseDtoTransformer;
use App\Repository\PostRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PostController extends AbstractController
{
    private PostResponseDtoTransformer $postResponseDtoTransformer;

    /**
     * PostController constructor.
     * @param PostResponseDtoTransformer $postResponseDtoTransformer
     */
    public function __construct(PostResponseDtoTransformer $postResponseDtoTransformer)
    {
        $this->postResponseDtoTransformer = $postResponseDtoTransformer;
    }


    public function posts(PostRepository $postRepository, UserRepository $userRepository): Response
    {

        $users = $userRepository->findAll();
        /*$posts = $postRepository->findAll();*/
        $test = $this->postResponseDtoTransformer->transformFromObjects($users);

        $response = new Response();
        $response->setContent(json_encode($test));
        $response->setStatusCode(Response::HTTP_OK );
        return $response;
        /*return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/PostController.php',
        ]);*/
    }
}
