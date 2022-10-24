import React, { FC, useState } from 'react';
import { Formik } from 'formik';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IInitialValues {
  city: string;
}

const Search: FC = () => {
  const [city, setCity] = useState('');
  const initialValues: IInitialValues = {
    city: '',
  };

  console.log(city);

  return (
    <SafeAreaView style={searchStyles.searchContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          setCity(values.city);
          resetForm();
        }}
      >
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
                <Text>{'\u1F50D'}</Text>
              </TouchableOpacity>
            </View>
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
