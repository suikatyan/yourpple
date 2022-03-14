<?php

namespace App\Http\Controllers;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    private $driver = 'twitter-oauth-2';

    public function login() {
        $url = Socialite::driver($this->driver)
            ->scopes(['follows.read', 'tweet.read', 'follows.read'])
            ->redirect()
            ->getTargetUrl();

        return response()->json(
            ['url' => $url],
            200,
            [],
            JSON_UNESCAPED_SLASHES
        );
    }

    public function callback() {
        $twitterUser = Socialite::driver($this->driver)->user();
        $user = User::twitterId($twitterUser->getId())->first();

        if ($user) {
            $user->save([
                'name' => $twitterUser->getName(),
                'nickname' => $twitterUser->getNickname(),
                'avatar' => $twitterUser->getAvatar(),
                'token' => $twitterUser->token,
                'last_authencated_date' => Carbon::now(),
            ]);
        } else {
            $user = User::create([
                'twitter_id' => $twitterUser->getId(),
                'name' => $twitterUser->getName(),
                'nickname' => $twitterUser->getNickname(),
                'avatar' => $twitterUser->getAvatar(),
                'token' => $twitterUser->token,
                'last_authencated_date' => Carbon::now(),
            ]);
        }

        Auth::login($user);

        return [
            'success' => true,
        ];
    }

    public function logout() {
        return [
            'success' => true,
        ];
    }
}
