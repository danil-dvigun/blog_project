<?php


namespace App\Dto\Response\Transformer;

use App\Dto\Exception\UnexpectedTypeException;
use App\Dto\Response\UserResponseDto;
use App\Entity\User;

class UserResponseDtoTransformer extends AbstractResponseDtoTransformer
{
    /**
     * @param User $user
     *
     * @return UserResponseDto
     */
    public function transformFromObject($user): UserResponseDto
    {
        if (!$user instanceof User) {
            throw new UnexpectedTypeException('Expected type of Customer but got ' . \get_class($user));
        }

        $dto = new UserResponseDto();
        $dto->name = $user->getName();
        $dto->roles = $user->getRoles();

        return $dto;
    }


}