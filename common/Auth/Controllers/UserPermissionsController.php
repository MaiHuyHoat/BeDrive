<?php namespace Common\Auth\Controllers;

use App\Models\User;
use Common\Auth\UserRepository;
use Common\Core\BaseController;
use Illuminate\Http\Request;

class UserPermissionsController extends BaseController
{
    /**
     * @var UserRepository
     */
    private $repository;

    /**
     * @var Request
     */
    private $request;

    public function __construct(UserRepository $repository, Request $request)
    {
        $this->repository = $repository;
        $this->request = $request;
    }

    public function add(int $userId)
    {
        $user = User::findOrFail($userId);

        $this->authorize('update', $user);

        $this->validate($this->request, [
            'permissions' => 'required|array|min:1',
            'permissions.*' => 'required|string',
        ]);

        return $this->success([
            'data' => $this->repository->addPermissions(
                $user,
                $this->request->get('permissions'),
            ),
        ]);
    }

    public function remove(int $userId)
    {
        $user = User::findOrFail($userId);

        $this->authorize('update', $user);

        $this->validate($this->request, [
            'permissions' => 'required|array|min:1',
            'permissions.*' => 'required|string',
        ]);

        return $this->success([
            'data' => $this->repository->removePermissions(
                $user,
                $this->request->get('permissions'),
            ),
        ]);
    }
}
