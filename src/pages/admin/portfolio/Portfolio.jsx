import React, { useEffect, useState } from 'react'
import AdminNav from '../../../components/layout/AdminNav/AdminNav';
import axios from 'axios';
function Portfolio() {
    const [data, setData] = useState([]);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isdelete, setIsDelete] = useState(false);
    const apiUrl = import.meta.env.VITE_API_URL;

    const getImages = async () => {
        try {
            const response = await axios.get(`${apiUrl}/portfolios`);

            setData(response.data.data);

        } catch (error) {
            console.error(error);
        }

    }

    const handleUpload = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try {
            const token = localStorage.getItem("token");

            const formData = new FormData();
            formData.append("image", image);

            const response = await axios.post(
                `${apiUrl}/portfolios/`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            getImages()
            setImage(null);

        } catch (error) {
            console.error(error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");
        setIsDelete(true)

        try {
            await axios.delete(
                `${apiUrl}/portfolios/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // Remove deleted item from UI
            setData((prev) => prev.filter((item) => item._id !== id));

        } catch (error) {
            console.error(error);
        } finally {
            setIsDelete(false)
        }
    };

    useEffect(() => {
        getImages();
    }, [])
    return (
        <div className='h-screen text-[14px] lg:text-[16px]'>
            <AdminNav></AdminNav>
            <div className='p-4 '>
                <div className='flex justify-between'>
                    <div className='flex gap-2'>

                        <h1 className='text-[16px] lg:text-[22px] font-medium'>Portfolio</h1>
                        <button className='px-2 bg-amber-400 text-white rounded cursor-pointer hover:bg-amber-500'>
                            <label htmlFor="file">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='cursor-pointer w-5.5 h-5.5'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </label>
                            <input
                                id='file'
                                type="file"
                                accept="image/*"
                                className='hidden'
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </button>
                    </div>

                    <button className='bg-yellow-400 px-4 py-2 text-white rounded cursor-pointer' onClick={(e) => handleUpload(e)} disabled={loading}>
                        {loading ? "Uploading..." : "Upload"}
                    </button>
                </div>
                {/* Left Table */}
                <div className="w-full overflow-x-auto py-4 bg-[#ffffff]">
                    <table className="w-full border border-gray-200">
                        <thead className="">
                            <tr>
                                <th className="border border-gray-300 py-2">Image</th>
                                <th className="border border-gray-300 py-2">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((items) => (
                                <tr key={items._id}>
                                    <td className="border border-gray-300 py-2  text-center">
                                        <img
                                            src={items.image}
                                            alt="Preview"
                                            className="w-15 h-15 object-cover mx-auto rounded"
                                        />
                                    </td>

                                    <td className="border border-gray-300  py-2 text-center">
                                        <button onClick={() => handleDelete(items._id)} className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-3 py-2 rounded">
                                            {isdelete ? "Deleting..." : "Delete"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Portfolio