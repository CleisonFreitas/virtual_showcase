import { useCallback, useState } from 'react'
import { BookSchema, CustomButton, DvdSchema, FormSelect, FurnitureSchema } from '..'
import { formContainer } from '../../../pages/products/ProductStyle'
import { FlexDisplay } from '../input/FlexDisplay'
import { FormInput } from '../input/FormInput'
import { BsSave2, BsStopBtn } from 'react-icons/bs'

type AttributeType = 'Dvd' | 'Book' | 'Furniture';

type FormStateType = {
  id: string | number;
  sku: string;
  name: string;
  price: string | number;
  selectedAttribute: string;
}
export const FormContainer = () => {

  const formState:FormStateType = {
    id: '',
    sku: '',
    name: '',
    price: '',
    selectedAttribute: 'Dvd'
  }
  const [formData, setFormData] = useState<FormStateType>(formState);
  const [selectedAttribute, setSelectedAttribute] = useState<string>('Dvd');
  const options = ['Dvd', 'Book', 'Furniture'];

  const handleSelectChange = (value: string) => {
    setSelectedAttribute(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    console.log(formData);
  },[formData])

  const attributes: Record<AttributeType, JSX.Element> = {
    'Dvd': <DvdSchema />,
    'Book': <BookSchema />,
    'Furniture': <FurnitureSchema />
  }
  return (
    <form className={formContainer} onSubmit={handleFormSubmit}>
      <div className="flex justify-between items-center px-2">
        <h2 className="text-center font-bold text-2xl my-2">Product Add</h2>
        <div className=' flex gap-2 items-center'>
        <CustomButton
          type='submit'
          variant='purple'>
          <span className='w-full flex gap-2 px-2'>
            <BsSave2 size={16} /> Save
          </span>
        </CustomButton>
        <CustomButton
          type='reset'
          variant='warning'>
          <span className='w-full flex gap-2 px-2'>
            <BsStopBtn size={16} /> Cancel
          </span>
        </CustomButton>
        </div>
        
      </div>

      <hr />
      <FlexDisplay>
        <FormInput
          label="id"
          nameInput="ID"
          type="text"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          sx={{
            'lg': 'lg:w-32',
            'md': 'md:w-32',
            'sm': 'w-24',
          }}
          disabled={true}
        />
      </FlexDisplay>

      <FlexDisplay>
        <FormInput
          label="sku"
          nameInput="Sku"
          placeholder="Ex:. ASF-32"
          value={formData.sku}
          name="sku"
          onChange={handleInputChange}
          type="text"
          sx={{
            'lg': 'lg:w-44',
            'md': 'md:w-44',
            'sm': 'sm:w-12',
          }}
          disabled={false}
        />
        <FormInput
          label='name'
          nameInput='Name'
          value={formData.name}
          name='name'
          onChange={handleInputChange}
          placeholder="Ex:.Harry Potter"
          type='text'
          sx={{
            'lg': 'lg:w-[400px]',
            'md': 'md:w-[600px]',
            'sm': 'w-full',
          }}
          disabled={false} />
      </FlexDisplay>

      <FlexDisplay>
        <FormInput
          label='price'
          nameInput='Price'
          name='price'
          value={formData.price}
          onChange={handleInputChange}
          type='text'
          sx={{
            'lg': 'lg:w-[200px]',
            'md': 'md:w-[250px]',
            'sm': 'w-44'
          }}
          placeholder='Ex: 16.00'
        />
        <FormSelect
          label='product_attribute'
          nameSelect='Type Switcher'
          name='type'
          options={options}
          value={selectedAttribute}
          onChange={handleSelectChange}
          sx={{
            'lg': 'lg:w-[250px]',
            'md': 'md:w-[250px]',
            'sm': 'w-44'
          }}
        />
      </FlexDisplay>

      <FlexDisplay>
        {attributes[selectedAttribute as AttributeType]}
      </FlexDisplay>

    </form>
  )
}