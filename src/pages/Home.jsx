import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';



const Home = () => {
    const [restuarant, setRestuarants] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
  
    useEffect(() => {
      setLoading(true);
      axios
        .get('http://localhost:3000/restuarant')
        .then((response) => {
          setBooks(response.data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    }, []);
    return (
        <div className='p-4'>
           <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ):(
        <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Res_OwnerName</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Res_Name
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Location
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Description
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody >
        {restuarant.map((book, index) => (
          <tr key={restuarant._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {restuarant.Res_OwnerName}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {restuarant.Res_Name}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {restuarant.Location}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
            {restuarant.Description}
          </td>
            <td className='border border-slate-700 rounded-md text-center'>
            <div className='flex justify-center gap-x-4'>
              <Link to={`/restuarant/details/${book._id}`}>
                <BsInfoCircle className='text-2xl text-green-800' />
              </Link>
              <Link to={`/restuarant/edit/${book._id}`}>
                <AiOutlineEdit className='text-2xl text-yellow-600' />
              </Link>
              <Link to={`/restuarant/delete/${book._id}`}>
                <MdOutlineDelete className='text-2xl text-red-600' />
              </Link>
            </div>
          </td>
        </tr>
        ))}
      </tbody>
      </table>
      )}
      </div>
      )
    }
    
      export default Home

