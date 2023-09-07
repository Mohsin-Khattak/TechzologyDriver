import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
import styles from './styles';
import Regular from 'typography/regular-text';
import {Clander, CreaditCard, Delivery} from 'assets/icons';
import {useTheme} from '@react-navigation/native';

const OrderHistoryCard = ({item, style, onPress, loading}) => {
  const colors = useTheme().colors;

  return (
    <TouchableOpacity onPress={onPress}>
      <Row style={{...styles.container, backgroundColor: colors.background}}>
        <View style={styles.idContainer} />
        <View style={styles.contentContainer}>
          <Regular label={item?.id} fontSize={mvs(12)} />
          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Clander />
            <Regular
              style={{
                marginLeft: mvs(10),
                color: colors.text,
                fontSize: mvs(12),
              }}
              label={item?.date}
            />
          </Row>
          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <CreaditCard />
            <Regular
              style={{
                marginLeft: mvs(10),
                color: colors.text,
                fontSize: mvs(12),
              }}
              label={`${'Payment Status -'} ${item?.payment_status}`}
            />
          </Row>
          <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
            <Delivery />
            <Regular
              style={{
                marginLeft: mvs(10),
                color: colors.text,
                fontSize: mvs(12),
              }}
              label={`${'Delivery Status -'} ${item?.delivery_status}`}
            />
          </Row>
        </View>
        <View style={styles.priceContainer}>
          <Medium fontSize={mvs(12)} label={'$12.150'} />
        </View>
      </Row>
    </TouchableOpacity>
  );
};
export default React.memo(OrderHistoryCard);
