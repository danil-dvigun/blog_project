<?php

namespace App\Dto\Response;

use JMS\Serializer\Annotation as Serialization;

namespace App\Dto\Response;


class UserResponseDto
{
    /**
     * @Serialization\Type("string")
     */
    public $name;

    /**
     * @Serialization\Type("array")
     */
    public $roles;

}