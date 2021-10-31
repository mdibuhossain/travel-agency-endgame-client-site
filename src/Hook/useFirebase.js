import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { initAuth } from '../Firebase/initAuth';

initAuth();

export const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const location = useLocation();
    const history = useHistory();
    // console.log(location);

    const redirect = () => {
        const { state } = location;
        (state?.from) ? history.push(state?.from?.pathname) : history.push('/')
    }

    const signWithGoogle = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                user && redirect();
            })
            .catch(error => setError('Something wrong with Google'))
            .finally(() => setIsLoading(false))
    }

    const signWithFacebook = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        const facebookProvider = new FacebookAuthProvider();
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                setUser(result.user)
                user && redirect();
            })
            .catch(error => setError('Something wrong with Facebook'))
            .finally(() => {
                setIsLoading(false)
            })
    }

    const signInWithEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                user && redirect();
            })
            .catch(error => setError("Incorrect Email and Password!"))
            .finally(() => setIsLoading(false))
    }

    const signUpWithEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                updateProfile(auth.currentUser, {
                    displayName: `${name && name}`,
                    photoURL: `${name && "/assets/img/avator.png"}`
                }).then(() => { }).catch(error => setError(error.message))
                user && redirect();
            })
            .catch(error => setError('Invalid Email and Password!'))
            .finally(() => setIsLoading(false))
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => setUser({}))
        // .finally(() => setIsLoading(false))
        user && redirect();
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                if (location.pathname === '/login' || location.pathname === '/logout')
                    history.push('/');
            }
            else
                setUser({});
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    return {
        user,
        error,
        isLoading,
        name,
        email,
        password,
        setPassword,
        setEmail,
        setName,
        logOut,
        signWithGoogle,
        signWithFacebook,
        signUpWithEmail,
        signInWithEmail
    }
}
