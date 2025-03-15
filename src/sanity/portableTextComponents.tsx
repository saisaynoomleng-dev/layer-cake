import { PortableTextComponents } from 'next-sanity'
import Image from 'next/image'
import React from 'react'
import { urlFor } from './lib/image'

export const components: PortableTextComponents = {
    types: {
        image: (props) =>
            props.value ? (
                <Image
                    className='rounded-lg not-prose w-full h-auto'
                    src={urlFor(props.value)
                        .width(600)
                        .height(400)
                        .quality(80)
                        .auto('format')
                        .url()}
                    alt={props?.value?.alt || ''}
                    width={600}
                    height={400}
                    priority />
            ) : null
    }
}