import {mvs} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';

import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import i18n from 'translation';
import styles from './styles';
import ChatCard from 'components/molecules/chat-card';
import {useTheme} from '@react-navigation/native';

const MessageTab = props => {
  const dispatch = useAppDispatch();
  const colors = useTheme().colors;

  const {t} = i18n;
  const featuredCategories = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
    {
      id: 3,
    },
  ];
  const featuredProduct = ({item}) => (
    <ChatCard item={item} onPress={() => navigate('InboxMessage')} />
  );
  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('message')} />
      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={featuredCategories}
        renderItem={featuredProduct}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
    </View>
  );
};
export default MessageTab;
