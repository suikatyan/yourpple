import ja from 'vuetify/src/locale/ja.ts';

export default {
  ...ja,

  title: 'ゆあっぷる',
  top: {
    title: 'トップ',
  },
  login: {
    title: '登録/ログイン',
    register: {
      title: 'Twitter認証',
      button: 'Twitterアカウントで登録/ログインする',
      message1: 'ボタンを押し、許可をしてください。',
      warning: 'Twitterのページに移動します。',
    },
    caution: {
      title: '登録/ログインについて',
      message1: '本サイトをお使いいただくためにはTwitter認証が必須となります。Twitter認証が必要な理由は以下の通りです。',
      list: {
        reason1: 'ログインの仕組みとして使うため',
        reason2: 'フォロー限定公開機能に使うフォロワー情報を取得するため',
      },
      message2: 'パスワードやダイレクトメッセージなどは取得しません。ツイートやリツイートなどをすることもありません。',
      message3: '詳しい情報は、「ご利用について」をご覧ください。',
    },
  },
  loginCallback: {
    message: '処理中です。ページを閉じないでください。',
    accessDenied: 'キャンセルされました。',
    errorCode: 'エラーコード：',
    back: '戻る',
  },
  about: {
    title: 'ご利用について',
  },
  alert: {
    error: 'エラーが発生しました。時間をおいて再度試してください。',
    loggedIn: 'ログインしました。',
  },
  common: {
    loadingDialog: {
      message: 'そのままお待ち下さい。',
    },
  },
};
