<?php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController{
    /**
     * @Route("/", name="blog_list", methods={"GET"})
     */
    public function getNumber(): Response
    {
        $number = 23;

        $response = new Response();
        $response->setContent(json_encode(["name"=>"Danil", "age"=>$number]));
        return $response;

    }
}