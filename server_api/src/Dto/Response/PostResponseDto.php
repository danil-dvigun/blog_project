<?php

namespace App\Dto\Response;

use JMS\Serializer\Annotation as Serialization;

class PostResponseDto
{
    /**
     * @Serialization\Type("string")
     */
    public $title;
    /**
     * @Serialization\Type("string")
     */
    public $description;
    /**
     * @Serialization\Type("string")
     */
    public $text;

    /**
     * @Serialization\Type("App\Dto\Response\UserResponseDto")
     */
    public $user;

}