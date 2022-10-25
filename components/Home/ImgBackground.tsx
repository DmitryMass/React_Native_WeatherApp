import React, { FC } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

interface IBackgroundProps {
  weather?: string | null | undefined;
  children: React.ReactElement;
}

const ImageBgc: FC<IBackgroundProps> = ({ weather, children }) => {
  //   if (weather && weather!.toLowerCase() === 'clear') {
  //     return (
  //       <ImageBackground
  //         style={backgroundStyle.image}
  //         source={{
  //           uri: 'https://images.unsplash.com/photo-1516571999955-7ef6c7885017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //         }}
  //       >
  //         {children}
  //       </ImageBackground>
  //     );
  //   }
  //   if (weather && weather.toLowerCase() === 'clouds') {
  //     return (
  //       <ImageBackground
  //         style={backgroundStyle.image}
  //         source={{
  //           uri: 'https://images.unsplash.com/photo-1548266652-99cf27701ced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  //         }}
  //       >
  //         {children}
  //       </ImageBackground>
  //     );
  //   }
  //   if (weather && weather!.toLowerCase() === 'rain') {
  //     return (
  //       <ImageBackground
  //         style={backgroundStyle.image}
  //         source={{
  //           uri: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80',
  //         }}
  //       >
  //         {children}
  //       </ImageBackground>
  //     );
  //   }
  //   if (weather && weather!.toLowerCase() === 'snow') {
  //     return (
  //       <ImageBackground
  //         style={backgroundStyle.image}
  //         source={{
  //           uri: 'https://images.unsplash.com/photo-1512770602775-95a6980f0737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //         }}
  //       >
  //         {children}
  //       </ImageBackground>
  //     );
  //   }
  //   if (weather && weather!.toLowerCase() === 'thunderstorm') {
  //     return (
  //       <ImageBackground
  //         style={backgroundStyle.image}
  //         source={{
  //           uri: 'https://images.unsplash.com/photo-1583459094467-e0db130c0dea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  //         }}
  //       >
  //         {children}
  //       </ImageBackground>
  //     );
  //   }

  return (
    <ImageBackground
      style={backgroundStyle.image}
      source={{
        uri: 'https://images.unsplash.com/photo-1606162555134-6b625614d5c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      }}
    >
      {children}
    </ImageBackground>
  );
};

export const backgroundStyle = StyleSheet.create({
  image: {
    flex: 1,
  },
});
export default ImageBgc;
