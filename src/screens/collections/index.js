import CustomFlatList from 'components/atoms/custom-flatlist';
import AppHeader from 'components/atoms/headers/app-header';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {View} from 'react-native';

import {useTheme} from '@react-navigation/native';
import {Row} from 'components/atoms/row';

import {Earnings} from 'assets/icons/app-icons';
import EarningCard from 'components/molecules/earning-card';
import Bold from 'typography/bold-text';
import Regular from 'typography/regular-text';
import styles from './styles';

const Collection = props => {
  const colors = useTheme().colors;

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

  const renderEarnings = ({item}) => (
    <EarningCard
      item={item}
      onPress={() => navigate('OrderDetails', {status: '4'})}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <AppHeader back title={t('Collection')} />
      <Row style={{paddingHorizontal: mvs(20), marginTop: mvs(20)}}>
        <Row style={styles.balanceContainer}>
          <View>
            <Regular
              fontSize={mvs(12)}
              color={colors.white}
              label={t('yesterday')}
            />
            <Bold
              style={{marginVertical: mvs(5)}}
              color={colors.white}
              fontSize={mvs(18)}
              label={'$14.00'}
            />
            <Regular
              fontSize={mvs(12)}
              color={colors.white}
              label={'16-08-2023'}
            />
          </View>
          <Earnings />
        </Row>

        <View
          style={{
            ...styles.rechargeContainer,
            backgroundColor: colors.green,
          }}>
          <Regular
            fontSize={mvs(12)}
            color={colors.white}
            label={t('yesterday')}
          />
          <Bold
            style={{marginVertical: mvs(5)}}
            color={colors.white}
            fontSize={mvs(18)}
            label={'$14.00'}
          />
          <Regular
            fontSize={mvs(12)}
            color={colors.white}
            label={'16-08-2023'}
          />
        </View>
      </Row>

      <CustomFlatList
        showsVerticalScrollIndicator={false}
        data={featuredCategories}
        renderItem={renderEarnings}
        contentContainerStyle={{
          paddingBottom: mvs(20),
          paddingHorizontal: mvs(20),
        }}
      />
    </View>
  );
};
export default Collection;
