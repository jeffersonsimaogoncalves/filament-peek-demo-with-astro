<?php

namespace App\Filament\Resources\PostResource\Pages;

use Pboivin\FilamentPeek\Pages\Actions\PreviewAction;
use Pboivin\FilamentPeek\Pages\Concerns\HasPreviewModal;

trait HasPostPreview
{
    use HasPreviewModal;

    protected function getActions(): array
    {
        return [
            PreviewAction::make()->label('Preview Changes'),
        ];
    }

    protected function getPreviewModalDataRecordKey(): ?string
    {
        return 'post';
    }

    protected function getPreviewModalUrl(): ?string
    {
        $postId = $this->previewModalData['post']->id ?: uniqid();
        $userId = auth()->user()->id;
        $token = md5("post-{$postId}-{$userId}");

        cache()->put("preview-{$token}", $this->previewModalData, 5 * 60);

        return config('app.front_url') . "/preview/post/?token={$token}";
    }
}
