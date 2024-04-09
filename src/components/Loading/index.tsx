import LottieView from 'lottie-react-native';

export function Loading() {
    return (
        <LottieView
            autoPlay
            loop
            style={{
                width: 60,
                height: 60,
                padding: 10
            }}
            source={require('../../assets/anim/pokeball.json')}
        />
    )
}