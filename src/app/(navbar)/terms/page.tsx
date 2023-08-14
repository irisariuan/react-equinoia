import { Noto_Sans_HK, Noto_Serif_HK } from 'next/font/google'

const notoSerifHk = Noto_Serif_HK({weight: '500', subsets:['latin']})

export default function Terms() {
    return (
        <div className="">
            <div className="m-3 p-3 rounded-xl bg-white dark:bg-black text-black dark:text-white">
                <p className={ notoSerifHk.className }>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae iusto consequatur atque dicta sint, excepturi a ducimus nisi ullam autem praesentium ab laborum ut beatae soluta veritatis sequi velit eos! At magni inventore nam iste eligendi explicabo quibusdam eveniet quam. Impedit, delectus eaque? Possimus reprehenderit ex doloribus amet rem quas hic corporis minima cum tenetur ducimus nisi, quia eveniet maxime aliquid numquam voluptates aperiam est libero suscipit nihil commodi. Itaque ullam natus rerum! Nisi qui corporis iusto modi dolorem, ut laboriosam libero aspernatur quisquam nemo, enim quas magni voluptatum. At exercitationem animi qui nihil sed minima vero, neque id unde maxime inventore molestiae provident suscipit veritatis repellendus sapiente culpa tempore dicta. Inventore dicta neque corporis fugiat, ab ex nobis ipsam quod, nesciunt, reiciendis quae. Voluptatibus delectus quisquam, magnam omnis odit voluptate quia ab. Magni saepe autem assumenda atque ea ipsum dolores similique, repellat dolor! Dolore, sit! Adipisci assumenda alias est labore quam sequi sapiente omnis. Officia, obcaecati eaque aliquam ullam temporibus perspiciatis voluptates voluptatum commodi provident modi doloremque consequatur! Impedit voluptatem qui eius quis ipsa dolor. Tempore incidunt repellendus animi illum, saepe temporibus porro expedita natus nisi eligendi. Minus enim sed modi culpa recusandae, autem earum adipisci quae quia maiores porro nostrum fugit, odio quos neque ex optio, soluta tenetur corrupti inventore similique. Aperiam similique, eius exercitationem perspiciatis nemo nobis magni, debitis aspernatur error earum consequatur voluptatum voluptate, quod voluptatibus dolores laborum culpa. In, quisquam. Velit, eaque error eius asperiores culpa facilis provident architecto nostrum soluta! Quas maiores dolores assumenda impedit vero excepturi tempore quo repellat voluptas voluptatum. Totam repudiandae eum iste. Nemo magni corporis perferendis voluptatum deleniti, aspernatur officiis vero assumenda voluptates odit vitae sequi distinctio veniam consectetur facere consequuntur maiores earum et nesciunt molestiae reiciendis nam! Placeat enim veritatis fuga numquam voluptates repudiandae dolor fugiat ad, sequi molestiae.
                </p>
            </div>
        </div>
    )
}