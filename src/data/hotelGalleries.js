/**
 * Modal carousel slides: OTA / official CDN where available; otherwise bundled hero
 * plus royalty-free reference photography (Pexels) so titles stay honest.
 *
 * @typedef {{ title: string; src: string }} HotelGallerySlide
 * @type {Record<string, HotelGallerySlide[]>}
 */
export const HOTEL_GALLERIES = {
  'grand-sultan-tea': [
    {
      title: 'Aerial view — property & tea country',
      src: 'https://grandsultanresort.com/wp-content/uploads/2023/11/Areal-view.jpg',
    },
    {
      title: 'Swimming pool & jacuzzi',
      src: 'https://grandsultanresort.com/wp-content/uploads/2023/08/swimming-pool-thumb.jpg',
    },
    {
      title: 'Pool Deck Cafe',
      src: 'https://grandsultanresort.com/wp-content/uploads/2023/07/pool-dack-cafe.jpg',
    },
    {
      title: 'Presidential suite (Raj Prashad)',
      src: 'https://grandsultanresort.com/wp-content/uploads/2023/07/roomssuites-landing-rajprasad.jpg',
    },
    {
      title: 'Dewan e Khas — meetings & events',
      src: 'https://grandsultanresort.com/wp-content/uploads/2023/08/dewan-e-khas-02.jpg',
    },
  ],
  'paragon-resort': [
    {
      title: 'Resort façade & drive',
      src: 'https://paragonresortbd.com/wp-content/uploads/2026/03/Deluxe-King-Size-Bed-1-700x466.png',
    },
    {
      title: 'Hillside pool deck',
      src: 'https://paragonresortbd.com/wp-content/uploads/2026/03/S1.png',
    },
    {
      title: 'Reception',
      src: 'https://paragonresortbd.com/wp-content/uploads/2026/02/Front-Desk-2048x1365.png',
    },
    {
      title: 'Jacuzzi',
      src: 'https://paragonresortbd.com/wp-content/uploads/2026/03/SP-3-1024x682.png',
    },
    {
      title: 'Night pool & lighting',
      src: 'https://paragonresortbd.com/wp-content/uploads/2026/03/GZ-1-1024x682.jpg',
    },
  ],
  'balisira-resort': [
    {
      title: 'Pool deck & resort gardens',
      src: 'https://www.balishiraresort.com/assets/admin/uploads/blog/1765520506468.jpg',
    },
    {
      title: 'Villas, cottages & walkways',
      src: 'https://www.balishiraresort.com/assets/admin/uploads/blog/1765520606766.jpg',
    },
    {
      title: 'Outdoor lawns & stream edge',
      src: 'https://www.balishiraresort.com/assets/admin/uploads/blog/1765520703298.jpg',
    },
    {
      title: 'Hillside forest & tea surrounds',
      src: 'https://www.balishiraresort.com/assets/admin/uploads/blog/1773312449519.jpg',
    },
    {
      title: 'Resort aerial & plantation belt',
      src: 'https://www.balishiraresort.com/assets/admin/uploads/blog/1773313202933.jpg',
    },
  ],
  'novem-ecoresort': [
    {
      title: 'Resort grounds & eco lodges',
      src: 'https://novemecoresort.com/wp-content/uploads/2025/04/4Z0A5249-1024x683.webp',
    },
    {
      title: 'Nature & tea-country surrounds',
      src: 'https://novemecoresort.com/wp-content/uploads/2025/04/Nature-01.webp',
    },
    {
      title: 'Resort exterior',
      src: 'https://novemecoresort.com/wp-content/uploads/2025/04/Novem-Exterior-02.webp',
    },
    {
      title: 'Aerial view — Bishamoni site',
      src: 'https://novemecoresort.com/wp-content/uploads/2025/04/Drone-shot-02.webp',
    },
    {
      title: 'Main gate arrival',
      src: 'https://novemecoresort.com/wp-content/uploads/2025/04/Novem-main-gate.webp',
    },
  ],
  'grand-sylhet': [
    {
      title: 'Front approach (official still)',
      src: '/hotels/grand-sylhet.jpg',
    },
    {
      title: 'Night façade — Booking.com gallery',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/562015580.jpg?k=173d233c682f3cab8c8c402d1e76e19e227e5ebec74fb4566c15f1e3276b1259&o=',
    },
    {
      title: 'Deluxe twin room',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max500/641328841.jpg?k=52974dd7d06ad5cbd2e7fee802bfc7ee185c0f547fe06f02a4cb2baacefda870&o=',
    },
    {
      title: 'Poolside dining terrace',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max500/564080217.jpg?k=64f70c08f9aac3317a19adeb190c670228565e0e42ba70f38b3a6cf9dd8f98d9&o=',
    },
    {
      title: 'Evening tower lighting',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max500/364031722.jpg?k=8aab6c073cf508a36aebdc48fa0de1dc2391affb3d91f62cea64eb545bff58ff&o=',
    },
  ],
  'tea-villa-luxury': [
    { title: 'Tea Villa — bundled hero still', src: '/hotels/tea-villa-luxury.jpg' },
    {
      title: 'Reference: infinity pool resort (Pexels)',
      src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
      title: 'Reference: tropical villa deck (Pexels)',
      src: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
      title: 'Reference: palm-lined pool (Pexels)',
      src: 'https://images.pexels.com/photos/261397/pexels-photo-261397.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
      title: 'Reference: luxury suite lounge (Pexels)',
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
  ],
  'lemon-garden': [
    {
      title: 'Swimming pool & gardens',
      src: 'https://lemongardenresort.com/wp-content/uploads/2022/01/Swimming-Pool.jpg',
    },
    {
      title: 'Presidential suite exterior',
      src: 'https://lemongardenresort.com/wp-content/uploads/2022/01/Presidential-Suite-scaled.jpg',
    },
    {
      title: 'Bagan Bilash wooden lodge',
      src: 'https://lemongardenresort.com/wp-content/uploads/2024/05/Bagan-Bilash-scaled.jpg',
    },
    {
      title: 'Luxury executive block',
      src: 'https://lemongardenresort.com/wp-content/uploads/2022/01/Luxury-Executive-Suite-1-scaled.jpg',
    },
    {
      title: 'Cineplex & recreation wing',
      src: 'https://lemongardenresort.com/wp-content/uploads/2022/01/Cineplex-1.jpg',
    },
  ],
  'regent-park': [
    {
      title: 'Resort approach — Silam',
      src: 'https://hotelsinbd.com/map_image/Sylhet/Regent_Park_Resort/Regent_Park_Resort_photo_01.jpg',
    },
    {
      title: 'Lawn & activity lawns',
      src: 'https://hotelsinbd.com/map_image/Sylhet/Regent_Park_Resort/Regent_Park_Resort_photo_02.jpg',
    },
    {
      title: 'Pond & eco deck',
      src: 'https://hotelsinbd.com/map_image/Sylhet/Regent_Park_Resort/Regent_Park_Resort_photo_03.jpg',
    },
    {
      title: 'Evening lighting',
      src: 'https://hotelsinbd.com/map_image/Sylhet/Regent_Park_Resort/Regent_Park_Resort_photo_04.jpg',
    },
    {
      title: 'Drive & façade',
      src: 'https://hotelsinbd.com/map_image/Sylhet/Regent_Park_Resort/Regent_Park_Resort_photo_05.jpg',
    },
  ],
  'rangauti': [
    {
      title: 'Manu-side guest block',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/655288142.jpg?k=025d50cb50c165f638cca5d3533020fb98f2c4fdd25b851ba6759343a643b60a&o=',
    },
    {
      title: 'Stone walk & fountain toward haor',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/654924741.jpg?k=b74b86fc521c1b29b370afdcc7d4b8f5906c9fe4b9506fb7beb56631177672f5&o=',
    },
    {
      title: 'Pool deck at dusk',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/654924819.jpg?k=b8fcf6341668c67b5757c52af72ae7ce76dc971a79644c343a5e9746bf142f82&o=',
    },
    {
      title: 'Playground & lawns',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/654924909.jpg?k=6a2340e9f3de16603d6e38a09e2e03fddb14d8b284091fa39a1ca34fc818e13d&o=',
    },
    {
      title: 'Riverside lounge porch',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/655288345.jpg?k=d074d78c1e26bd2cb01d3c0d5f6802f51a3f1bfe5511b21f5b6c25446b2d561f&o=',
    },
  ],
  'nazimgarh': [
    {
      title: 'Garden resort — Sylhet façade',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/471859202.jpg?k=d158a6b7f04203c39aa4be85e045615b644392b8f64a7d73961a66b3c6a25acb&o=',
    },
    {
      title: 'Hillside arrival court',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/387921119.jpg?k=f9ab05f27bcb07f41871dca11781bc59ead2ee75bc3f2392d6f0ce06f74ea8bc&o=',
    },
    {
      title: 'Infinity-edge pool terrace',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/387945912.jpg?k=7478fd89ab25001bf067a459036c08c6540c827d18146cbd7f0d17d6cc8b16a0&o=',
    },
    {
      title: 'Garden villas & paths',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/387945304.jpg?k=8da00b05b4e5be38ada723e6ef7b5242dfd0ac7fe2decab894c7a4582b72db71&o=',
    },
    {
      title: 'Lawn & forested ridge',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/387944829.jpg?k=c974bb76d300109161298e91b0b60f02fba2d5458ba1fe9b1553c4bcebdb3ff4&o=',
    },
  ],
  'dusai': [
    {
      title: 'DuSai — Trip.com hero frame',
      src: 'https://ak-d.tripcdn.com/images/0222512000pw99fuyFEAC_Z_1280_853_R50_Q90.jpg',
    },
    {
      title: 'Hillside resort pool (Booking.com still)',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/29751290.jpg?k=cded09b40e40f20e2bb03970344c86b3b1d9e4447df153945519dd06c977d4da&o=',
    },
    {
      title: 'Bundled hero still',
      src: '/hotels/dusai-resort.jpg',
    },
    {
      title: 'Reference: rainforest infinity pool (Pexels)',
      src: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
      title: 'Reference: spa & wellness lounge (Pexels)',
      src: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
  ],
  'palace-luxury': [
    { title: 'The Palace — bundled hero still', src: '/hotels/palace-luxury.jpg' },
    {
      title: 'Reference: high-rise resort towers (Pexels)',
      src: 'https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
      title: 'Reference: lakeside boardwalk (Pexels)',
      src: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
      title: 'Reference: resort pool at blue hour (Pexels)',
      src: 'https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    {
      title: 'Reference: illuminated event lawn (Pexels)',
      src: 'https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
  ],
};

