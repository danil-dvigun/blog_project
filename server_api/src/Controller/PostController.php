<?php

namespace App\Controller;

use App\Dto\Response\Transformer\PostResponseDtoTransformer;
use App\Entity\Post;
use App\Repository\PostRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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


    public function posts(PostRepository $postRepository): Response
    {

        $posts = $postRepository->findAll();
        $dtoPosts = $this->postResponseDtoTransformer->transformFromObjects($posts);

        $response = new Response();
        $response->setContent(json_encode($dtoPosts));
        $response->setStatusCode(Response::HTTP_OK );
        return $response;
        /*return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/PostController.php',
        ]);*/
    }

    public function addPost(Request $request, UserRepository $userRepository, EntityManagerInterface $entityManager): Response
    {
        $postData = json_decode($request->getContent());
        /*$userId = $request->credentials["user_id"];*/
        $userId = $this->getUser()->getId();
        $user = $userRepository->findBy(["id"=> $userId]);
        /*$posts = $postRepository->findAll();
        $test = $this->postResponseDtoTransformer->transformFromObjects($posts);*/

        $post = new Post();
        $post->setTitle($postData->title);
        $post->setText($postData->text);
        $post->setDescription($postData->description);
        $post->setOwner($user[0]);

        $entityManager->persist($post);
        $entityManager->flush();

        $response = new Response();
        $response->setContent(json_encode(["test" => "test"]));
        $response->setStatusCode(Response::HTTP_OK );
        return $response;
        /*return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/PostController.php',
        ]);*/
    }
}
