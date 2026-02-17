import DeluxeImage from '@/assets/deluxe.webp'
import ExecutiveImage from '@/assets/executive.webp'
import LuxuryImage from '@/assets/luxury.webp'

export const rooms = [
  // luxury category
  {
    name: 'Royal Room',
    slug: 'royal-room',
    category: 'luxury-suite',
    image: LuxuryImage,
    thumbnails: [LuxuryImage, DeluxeImage, ExecutiveImage],
    description:
      'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
    amenities: [
      {
        icon: 'wifi',
        name: 'Wifi',
      },

      {
        icon: 'ac',
        name: 'Air Conditioning',
      },
      {
        icon: 'room-service',
        name: '24/7 Room Service',
      },
      {
        icon: 'tv',
        name: 'Smart TV',
      },
      {
        icon: 'shower',
        name: 'Walk-in Shower',
      },
      {
        icon: 'coffee',
        name: 'Tea & Coffee Station',
      },
    ],
    features: [
      {
        icon: 'bed',
        name: 'Sleeps',
        value: '2 Adults',
      },
      {
        icon: 'ruler',
        name: 'Size',
        value: '400 sq. ft',
      },
      {
        icon: 'camera',
        name: 'View',
        value: 'City View',
      },
    ],

    price: 30000,
    discount: 20,
  },

  {
    name: 'Comfort Room',
    slug: 'comfort-room',
    category: 'luxury-suite',
    image: LuxuryImage,
    thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
    description:
      'Experience a cozy and relaxing stay in our Comfort Room. Designed for travelers looking for a peaceful retreat, this 350 sq. ft. room offers a city view and all essential amenities.',
    amenities: [
      {
        icon: 'wifi',
        name: 'Wifi',
      },

      {
        icon: 'ac',
        name: 'Air Conditioning',
      },
      {
        icon: 'room-service',
        name: '24/7 Room Service',
      },
      {
        icon: 'tv',
        name: 'Smart TV',
      },
      {
        icon: 'shower',
        name: 'Walk-in Shower',
      },
      {
        icon: 'coffee',
        name: 'Tea & Coffee Station',
      },
    ],
    features: [
      {
        icon: 'bed',
        name: 'Sleeps',
        value: '2 Adults',
      },
      {
        icon: 'ruler',
        name: 'Size',
        value: '400 sq. ft',
      },
      {
        icon: 'camera',
        name: 'View',
        value: 'City View',
      },
    ],
    price: 20000,
    discount: 15,
  },

  {
    name: 'Serene Room',
    slug: 'serene-room',
    category: 'luxury-suite',
    image: LuxuryImage,
    thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
    description:
      'Our Serene Room is a perfect blend of modern comfort and tranquility. This 400 sq. ft. room provides a garden view, allowing guests to unwind in a peaceful setting.',
    amenities: [
      {
        icon: 'wifi',
        name: 'Wifi',
      },

      {
        icon: 'ac',
        name: 'Air Conditioning',
      },
      {
        icon: 'room-service',
        name: '24/7 Room Service',
      },
      {
        icon: 'tv',
        name: 'Smart TV',
      },
      {
        icon: 'shower',
        name: 'Walk-in Shower',
      },
      {
        icon: 'coffee',
        name: 'Tea & Coffee Station',
      },
    ],
    features: [
      {
        icon: 'bed',
        name: 'Sleeps',
        value: '2 Adults',
      },
      {
        icon: 'ruler',
        name: 'Size',
        value: '400 sq. ft',
      },
      {
        icon: 'camera',
        name: 'View',
        value: 'City View',
      },
    ],
    price: 25000,
    discount: 10,
  },

  // deluxe category
  {
    name: 'Royal Room',
    slug: 'royal-room',
    category: 'deluxe-suite',
    image: LuxuryImage,
    thumbnails: [LuxuryImage, DeluxeImage, ExecutiveImage],
    description:
      'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
    amenities: [
      {
        icon: 'wifi',
        name: 'Wifi',
      },

      {
        icon: 'ac',
        name: 'Air Conditioning',
      },
      {
        icon: 'room-service',
        name: '24/7 Room Service',
      },
      {
        icon: 'tv',
        name: 'Smart TV',
      },
      {
        icon: 'shower',
        name: 'Walk-in Shower',
      },
      {
        icon: 'coffee',
        name: 'Tea & Coffee Station',
      },
    ],
    features: [
      {
        icon: 'bed',
        name: 'Sleeps',
        value: '2 Adults',
      },
      {
        icon: 'ruler',
        name: 'Size',
        value: '400 sq. ft',
      },
      {
        icon: 'camera',
        name: 'View',
        value: 'City View',
      },
    ],

    price: 30000,
    discount: 20,
  },

  {
    name: 'Comfort Room',
    slug: 'comfort-room',
    category: 'deluxe-suite',
    image: LuxuryImage,
    thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
    description:
      'Experience a cozy and relaxing stay in our Comfort Room. Designed for travelers looking for a peaceful retreat, this 350 sq. ft. room offers a city view and all essential amenities.',
    amenities: [
      {
        icon: 'wifi',
        name: 'Wifi',
      },

      {
        icon: 'ac',
        name: 'Air Conditioning',
      },
      {
        icon: 'room-service',
        name: '24/7 Room Service',
      },
      {
        icon: 'tv',
        name: 'Smart TV',
      },
      {
        icon: 'shower',
        name: 'Walk-in Shower',
      },
      {
        icon: 'coffee',
        name: 'Tea & Coffee Station',
      },
    ],
    features: [
      {
        icon: 'bed',
        name: 'Sleeps',
        value: '2 Adults',
      },
      {
        icon: 'ruler',
        name: 'Size',
        value: '400 sq. ft',
      },
      {
        icon: 'camera',
        name: 'View',
        value: 'City View',
      },
    ],
    price: 20000,
    discount: 15,
  },

  {
    name: 'Serene Room',
    slug: 'serene-room',
    category: 'deluxe-suite',
    image: LuxuryImage,
    thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
    description:
      'Our Serene Room is a perfect blend of modern comfort and tranquility. This 400 sq. ft. room provides a garden view, allowing guests to unwind in a peaceful setting.',
    amenities: [
      {
        icon: 'wifi',
        name: 'Wifi',
      },

      {
        icon: 'ac',
        name: 'Air Conditioning',
      },
      {
        icon: 'room-service',
        name: '24/7 Room Service',
      },
      {
        icon: 'tv',
        name: 'Smart TV',
      },
      {
        icon: 'shower',
        name: 'Walk-in Shower',
      },
      {
        icon: 'coffee',
        name: 'Tea & Coffee Station',
      },
    ],
    features: [
      {
        icon: 'bed',
        name: 'Sleeps',
        value: '2 Adults',
      },
      {
        icon: 'ruler',
        name: 'Size',
        value: '400 sq. ft',
      },
      {
        icon: 'camera',
        name: 'View',
        value: 'City View',
      },
    ],
    price: 25000,
    discount: 10,
  },

  // executive category
  {
    name: 'Royal Room',
    slug: 'royal-room',
    category: 'executive-suite',
    image: LuxuryImage,
    thumbnails: [LuxuryImage, DeluxeImage, ExecutiveImage],
    description:
      'Indulge in the epitome of luxury with our Royal Room. This exclusive suite offers the perfect blend of comfort and sophistication, featuring a spacious 500 sq. ft. layout with a breathtaking mountain view.',
    amenities: [
      {
        icon: 'wifi',
        name: 'Wifi',
      },

      {
        icon: 'ac',
        name: 'Air Conditioning',
      },
      {
        icon: 'room-service',
        name: '24/7 Room Service',
      },
      {
        icon: 'tv',
        name: 'Smart TV',
      },
      {
        icon: 'shower',
        name: 'Walk-in Shower',
      },
      {
        icon: 'coffee',
        name: 'Tea & Coffee Station',
      },
    ],
    features: [
      {
        icon: 'bed',
        name: 'Sleeps',
        value: '2 Adults',
      },
      {
        icon: 'ruler',
        name: 'Size',
        value: '400 sq. ft',
      },
      {
        icon: 'camera',
        name: 'View',
        value: 'City View',
      },
    ],

    price: 30000,
    discount: 20,
  },

  {
    name: 'Comfort Room',
    slug: 'comfort-room',
    category: 'executive-suite',
    image: LuxuryImage,
    thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
    description:
      'Experience a cozy and relaxing stay in our Comfort Room. Designed for travelers looking for a peaceful retreat, this 350 sq. ft. room offers a city view and all essential amenities.',
    amenities: [
      {
        icon: 'wifi',
        name: 'Wifi',
      },

      {
        icon: 'ac',
        name: 'Air Conditioning',
      },
      {
        icon: 'room-service',
        name: '24/7 Room Service',
      },
      {
        icon: 'tv',
        name: 'Smart TV',
      },
      {
        icon: 'shower',
        name: 'Walk-in Shower',
      },
      {
        icon: 'coffee',
        name: 'Tea & Coffee Station',
      },
    ],
    features: [
      {
        icon: 'bed',
        name: 'Sleeps',
        value: '2 Adults',
      },
      {
        icon: 'ruler',
        name: 'Size',
        value: '400 sq. ft',
      },
      {
        icon: 'camera',
        name: 'View',
        value: 'City View',
      },
    ],
    price: 20000,
    discount: 15,
  },

  {
    name: 'Serene Room',
    slug: 'serene-room',
    category: 'executive-suite',
    image: LuxuryImage,
    thumbnails: [LuxuryImage, LuxuryImage, LuxuryImage],
    description:
      'Our Serene Room is a perfect blend of modern comfort and tranquility. This 400 sq. ft. room provides a garden view, allowing guests to unwind in a peaceful setting.',
    amenities: [
      {
        icon: 'wifi',
        name: 'Wifi',
      },

      {
        icon: 'ac',
        name: 'Air Conditioning',
      },
      {
        icon: 'room-service',
        name: '24/7 Room Service',
      },
      {
        icon: 'tv',
        name: 'Smart TV',
      },
      {
        icon: 'shower',
        name: 'Walk-in Shower',
      },
      {
        icon: 'coffee',
        name: 'Tea & Coffee Station',
      },
    ],
    features: [
      {
        icon: 'bed',
        name: 'Sleeps',
        value: '2 Adults',
      },
      {
        icon: 'ruler',
        name: 'Size',
        value: '400 sq. ft',
      },
      {
        icon: 'camera',
        name: 'View',
        value: 'City View',
      },
    ],
    price: 25000,
    discount: 10,
  },
]
