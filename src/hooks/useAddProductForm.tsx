import { initialValueProducts } from "@/data";
import { Product } from "@/models";
import { productSchema } from "@/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { getCookie } from "cookies-next";
import { setCookie } from "cookies-next";
import { useState } from "react";
import { useForm } from "react-hook-form";



const useAddProductForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Product>({
        resolver: yupResolver(productSchema),
        defaultValues: initialValueProducts
    });

    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const onSubmit = async (data: Product) => {
        setSaving(true);
        setSaved(false);

        const cookieValue = await getCookie('products');
        const existingProducts = JSON.parse(cookieValue?.toString() || '[]');
        const newProduct = {
            ...data,
        };

        setCookie('products', JSON.stringify([...existingProducts, newProduct]));
        setSaving(false);
        setSaved(true);

        reset(initialValueProducts);

        setTimeout(() => {
            setSaved(false);
        }, 3000);
    };

    return { register, handleSubmit, formState: { errors }, reset, saving, saved, onSubmit }
}

export default useAddProductForm
