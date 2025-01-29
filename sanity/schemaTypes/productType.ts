import { TrolleyIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
    name: "product",
    title: "Product",
    type: "document",
    icon: TrolleyIcon,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "intro",
            title: "Product Intro",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "discount",
            title: "Discount Price",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:"images",
            title:"Product Images",
            type:"array",
            of:[{type:'image',options: {hotspot:true}}],
        }),
        defineField({
            name:"category",
            title:"Category",
            type:"array",
            of:[{type:"reference", to: {type: "category"}}],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "Stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.min(0),
        }),
        defineField({
            name: "status",
            title: "Product Status",
            type: "string",
            options: {
                list: [
                    { title: "New", value: 'new'},
                    { title: "Sale", value: 'sale'},
                    { title: "Hot", value: 'hot'},]
            }
        }),
        defineField({
            name:'variant',
            title: 'Product Type',
            type:'string',
            options: {
                list: [
                    { title: "Goth Rings", value: 'goth-rings'},
                    { title: "Goth Chain", value: 'goth-chain'},
                    {title: "Earthy chaim", value: 'earthy-chain'},
                    {title: "Earthy Rings", value: 'earthy-rings'},
                    {title: "Vintage Rings", value: 'vintage-rings'},
                    {title: "Vintage Chain", value: 'vintage-chain'},
                ]
            }
        }),

    ],

    preview: {
        select: {
            title: "name",
            media: "images",
            subtitle: "price",
        },
        prepare(selection) {
            const { title, media, subtitle } = selection
            const image = media && media[0];
            return {
                title: title,
                subtitle: `$${subtitle}`,
                media: image,
            }
        }
    }
})