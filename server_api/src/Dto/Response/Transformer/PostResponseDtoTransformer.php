<?php


namespace App\Dto\Response\Transformer;

use App\Dto\Exception\UnexpectedTypeException;
use App\Dto\Response\PostResponseDto;
use App\Entity\Post;

class PostResponseDtoTransformer extends AbstractResponseDtoTransformer
{
    private UserResponseDtoTransformer $userResponseDtoTransformer;

    public function __construct(UserResponseDtoTransformer $userResponseDtoTransformer)
    {
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
    }
    /**
     * @param Post $post
     *
     * @return PostResponseDto
     */
    public function transformFromObject($post): PostResponseDto
    {
        if (!$post instanceof Post) {
            throw new UnexpectedTypeException('Expected type of Order but got ' . \get_class($post));
        }

        $dto = new PostResponseDto();
        $dto->title = $post->getTitle();
        $dto->description = $post->getDescription();
        $dto->text = $post->getText();
        $dto->user = $this->userResponseDtoTransformer->transformFromObject($post->getOwner());

        return $dto;
    }

}