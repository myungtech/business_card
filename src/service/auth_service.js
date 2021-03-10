import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {

    // 사용자 로그인
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    }
    // 사용자 로그아웃
    logout() {
        firebase.auth().signOut();
    }

    //인증 상태 관찰자 설정 및 사용자 데이터 가져오기
    //사용자의 로그인 상태가 변경될 때마다 이 관찰자가 호출됩니다.
    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user);
        });

    }


}
export default AuthService;