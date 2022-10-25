import React, { FC } from 'react';
import { Formik } from 'formik';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import useActions from '../../src/hooks/actions';
import { useDispatch } from 'react-redux';
import { useFetchData } from '../../src/hooks/useFetchData';
import { AntDesign } from '@expo/vector-icons';
import { AntDesign as Close } from '@expo/vector-icons';

interface IInitialValues {
  city: string;
}

interface ISearchProps {
  isOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Search: FC<ISearchProps> = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { changeCity } = useActions();
  const { fetchData } = useFetchData();
  const initialValues: IInitialValues = {
    city: '',
  };

  const handleSubmit = async (values: IInitialValues, { resetForm }: any) => {
    try {
      if (values.city && values.city.trim()) {
        dispatch(changeCity(values.city));
        fetchData(values.city);
      }
    } catch (e) {
      console.log(e);
    }

    isOpen(false);
    resetForm();
  };

  return (
    <View style={searchStyles.searchContainer}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ handleSubmit, handleChange, errors, values }) => (
          <View>
            {errors.city && (
              <View>
                <Text>{errors.city}</Text>
              </View>
            )}
            <View style={searchStyles.form}>
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
                <AntDesign name='search1' size={28} color='white' />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <TouchableOpacity
        onPress={() => isOpen(false)}
        style={searchStyles.closeButton}
      >
        <Close name='close' size={24} color='white' />
      </TouchableOpacity>
    </View>
  );
};

export const searchStyles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#35508a',
    height: '25%',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    position: 'relative',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    height: 48,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0045da',
    borderWidth: 1,
    borderColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Search;
