<?php

namespace App\Console\Commands;

use App\Models\ShareableLink;
use Carbon\Carbon;
use Illuminate\Console\Command;

class DeleteExpiredLinks extends Command
{
    /**
     * @var string
     */
    protected $signature = 'links:delete_expired';

    /**
     * @var string
     */
    protected $description = 'Delete expired shareable links.';

    public function __construct(private ShareableLink $link)
    {
        parent::__construct();
    }

    public function handle()
    {
        $this->link->where('expires_at', '<', Carbon::now())->delete();
        $this->info('Deleted all expired shareable links');
    }
}
