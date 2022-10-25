import React, { FC } from 'react';
import { Formik } from 'formik';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useActions from '../../src/hooks/actions';
import { useDispatch } from 'react-redux';
import { useFetchData } from '../../src/hooks/useFetchData';

interface IInitialValues {
  city: string;
}

const Search: FC = () => {
  const dispatch = useDispatch();
  const { changeCity } = useActions();
  const { fetchData } = useFetchData();
  const initialValues: IInitialValues = {
    city: '',
  };

  const handleSubmit = async (values: IInitialValues, { resetForm }: any) => {
    try {
      dispatch(changeCity(values.city));
      fetchData(values.city);
    } catch (e) {
      console.log(e);
    }
    resetForm();
  };

  return (
    <SafeAreaView style={searchStyles.searchContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit, handleChange, errors, values }) => (
          <View>
            {errors.city && (
              <View>
                <Text>{errors.city}</Text>
              </View>
            )}
            <SafeAreaView style={searchStyles.form}>
              <TextInput
                style={searchStyles.input}
                value={values.city}
                placeholder='City'
                onChangeText={handleChange('city')}
              />
              <TouchableOpacity
                style={searchStyles.button}
                onPress={handleSubmit as (values: any) => void}
              >
                <Text>Search</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export const searchStyles = StyleSheet.create({
  searchContainer: {
    marginTop: 200,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -90,
  },
  input: {
    borderRadius: 15,
    marginRight: 5,
    backgroundColor: 'white',
    width: '70%',
    padding: 10,
    color: 'black',
    fontSize: 16,
    letterSpacing: 1,
  },

  button: {
    width: '20%',
    height: 45,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});

export default Search;
