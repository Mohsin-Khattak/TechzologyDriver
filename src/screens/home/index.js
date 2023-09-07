import {
  Brands,
  Coupons,
  FlashDeals,
  TopCategories,
  TopVendors,
} from 'assets/icons';
import CustomFlatList from 'components/atoms/custom-flatlist';
import HomeHeader from 'components/atoms/headers/home-header';
import {Row} from 'components/atoms/row';
import SwiperCard from 'components/atoms/swiper';
import FeaturedCategoriesCard from 'components/molecules/featured-categories-card';
import FeaturedProductsCard from 'components/molecules/featured-products-card';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Alert, TouchableOpacity, View} from 'react-native';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import styles from './styles';
import {
  banners,
  getAllFeaturedProducts,
  getAllProducts,
  getFeaturedCategories,
} from 'services/api/auth-api-actions';
import AllProductsCard from 'components/molecules/all-products-card';
import {Loader} from 'components/atoms/loader';
import {UTILS} from 'utils';
import {t} from 'i18next';
import {useTheme} from '@react-navigation/native';

const HomeTab = props => {
  const colors = useTheme().colors;

  const [banner, setBanner] = React.useState([]);
  const [featuredCategorie, setFeaturedCategorie] = React.useState([]);
  const [allFeaturedProducts, setAllFeaturedProducts] = React.useState([]);
  const [pageLoading, setPageLoading] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  const [allProducts, setAllProducts] = React.useState([]);
  // console.log('banners check==========>', allFeaturedProducts?.data);

  const getBanners = async () => {
    try {
      const res = await banners();
      setBanner(res);
      const resCategories = await getFeaturedCategories();
      setFeaturedCategorie(resCategories);
      const resAllFeaturedProducts = await getAllFeaturedProducts();
      setAllFeaturedProducts(resAllFeaturedProducts);
    } catch (error) {
      console.log('Error get Banners====>', UTILS.returnError(error));
    }
  };
  const fetchProducts = async setDataLoading => {
    try {
      setDataLoading(true);
      const res = await getAllProducts(pageNumber);
      setAllProducts(preProducts =>
        pageNumber > 1
          ? {
              ...res,
              data: preProducts?.data
                ? [...preProducts?.data, ...res?.data]
                : [...res?.data],
            }
          : res,
      );
    } catch (error) {
      console.log('Error in getProducts====>', error);
      Alert.alert('Products Error', UTILS.returnError(error));
    } finally {
      setDataLoading(false);
    }
  };
  const handleLoadMore = () => {
    const lastPage = Math.ceil(
      (allProducts?.meta?.total || 0) / allProducts?.meta?.per_page,
    );
    if (!pageLoading && pageNumber < lastPage) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };
  React.useEffect(() => {
    getBanners();
  }, []);
  React.useEffect(() => {
    if (pageNumber > 0 && !pageLoading) {
      fetchProducts(setPageLoading);
    }
  }, [pageNumber]);

  const renderShop = ({item}) => (
    <FeaturedCategoriesCard
      item={item}
      onPress={() => navigate('FeaturedCategories', {item: item})}
    />
  );
  const featuredProduct = ({item}) => (
    <FeaturedProductsCard
      item={item}
      onPress={() => navigate('ProductDetials', {productId: item?.id})}
    />
  );
  const renderProduct = ({item}) => (
    <AllProductsCard
      item={item}
      onPress={() => navigate('ProductDetials', {productId: item?.id})}
      onAddCart={() => navigate('Cart')}
    />
  );

  return (
    <View style={{...styles.container, backgroundColor: colors.background}}>
      <HomeHeader menu isSearch notification />

      <CustomFlatList
        ListHeaderComponent={
          <View>
            <SwiperCard data={banner?.data} />
            <Row style={{marginTop: mvs(25), paddingHorizontal: mvs(20)}}>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View
                  style={{
                    ...styles.itemsContainer,
                    backgroundColor: colors.skyBlue,
                    borderRadius: mvs(100),
                  }}>
                  <TopCategories />
                </View>
                <Regular
                  color={colors.text}
                  label={'Top Categories'}
                  fontSize={mvs(10)}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View
                  style={{
                    ...styles.itemsContainer,
                    backgroundColor: colors.skyBlue,
                  }}>
                  <Brands />
                </View>
                <Regular
                  color={colors.text}
                  label={'Brands'}
                  fontSize={mvs(10)}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View
                  style={{
                    ...styles.itemsContainer,
                    backgroundColor: colors.skyBlue,
                    borderRadius: mvs(100),
                  }}>
                  <TopVendors />
                </View>
                <Regular
                  color={colors.text}
                  label={'Top Vendors'}
                  fontSize={mvs(10)}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View
                  style={{
                    ...styles.itemsContainer,
                    backgroundColor: colors.skyBlue,
                    borderRadius: mvs(100),
                  }}>
                  <FlashDeals />
                </View>
                <Regular
                  color={colors.text}
                  label={'Flash Deals'}
                  fontSize={mvs(10)}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <View
                  style={{
                    ...styles.itemsContainer,
                    backgroundColor: colors.skyBlue,
                    borderRadius: mvs(100),
                  }}>
                  <Coupons />
                </View>
                <Regular
                  color={colors.text}
                  label={'Coupons'}
                  fontSize={mvs(10)}
                />
              </TouchableOpacity>
            </Row>
            <View
              style={{
                ...styles.featuredContainer,
                backgroundColor: colors.primary,
              }}>
              <Row
                style={{
                  marginTop: mvs(5),
                  marginBottom: mvs(10),
                  alignItems: 'center',
                  paddingHorizontal: mvs(10),
                }}>
                <Medium color={colors.white} label={'Featured Categories'} />
                <TouchableOpacity
                  onPress={() => navigate('AllFeaturedCategories')}>
                  <Regular color={colors.white} label={t('see_all')} />
                </TouchableOpacity>
              </Row>

              <CustomFlatList
                horizontal={true}
                showsVerticalScrollIndicator={false}
                // columnWrapperStyle={styles.columnWrapperStyle}
                data={featuredCategorie?.data}
                renderItem={renderShop}
              />
            </View>

            <View
              style={{
                ...styles.featuredContainer,
                backgroundColor: colors.primary,
              }}>
              <Medium
                style={{
                  marginTop: mvs(5),
                  marginBottom: mvs(10),
                  marginLeft: mvs(10),
                }}
                color={colors.white}
                label={'Featured Products'}
              />
              <CustomFlatList
                horizontal={true}
                showsVerticalScrollIndicator={false}
                // columnWrapperStyle={styles.columnWrapperStyle}
                data={allFeaturedProducts?.data}
                renderItem={featuredProduct}
              />
            </View>
            <Medium
              color={colors.text}
              style={{marginLeft: mvs(20), marginTop: mvs(10)}}
              label={'All Products'}
            />
          </View>
        }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyle}
        data={allProducts?.data || []}
        renderItem={renderProduct}
        onEndReached={handleLoadMore} // Load more when reaching the end of the list
        onEndReachedThreshold={0.5} // Load more when the user reaches the last 50% of the list
        contentContainerStyle={{paddingBottom: mvs(20)}}
        ListFooterComponent={pageLoading && <Loader />}
      />
    </View>
  );
};
export default HomeTab;
