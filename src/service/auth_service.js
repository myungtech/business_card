import firebase from 'firebase';

// 사용자 로그인 or 로그아웃
class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }

}
export default AuthService;