import { firebaseAuth, googleProvider, githubProvider } from './firebase';

class AuthService {

    // 사용자 로그인
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }
    // 사용자 로그아웃
    logout() {
        firebaseAuth.signOut();
    }

    //인증 상태 관찰자 설정 및 사용자 데이터 가져오기
    //사용자의 로그인 상태가 변경될 때마다 이 관찰자가 호출됩니다.
    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        });

    }
    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`now supported provider: ${providerName}`);
        }
    }

}
export default AuthService;