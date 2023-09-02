import { h, Fragment } from 'preact';

import RenderBlocks from './RenderBlocks.jsx';

export default function PostContent({ post, category }) {
    console.log(post);

    return (
        <main>
            <div class="relative min-h-[200px] flex items-center justify-center bg-black">
                <div
                    class="absolute inset-0 z-0 opacity-50"
                    style="background-image: url(https://picsum.photos/id/353/800/600); background-size: cover; background-position: center;"
                ></div>

                <div class="relative z-1 p-2 text-4xl text-gray-700 lg:text-6xl">
                    <div class="text-4xl text-white">
                        <h1>{post.title}</h1>
                    </div>
                </div>
            </div>

            <div class="max-w-wide mx-auto p-2">
                <div class="prose mt-8 mx-auto text-black">
                    <RenderBlocks blocks={post.content_blocks} />

                    {/*
                    <h2>Sed eu consequat purus</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed tortor vitae sem cursus
                        ullamcorper. In pellentesque purus et ante eleifend finibus. Fusce quis sapien nunc. Donec
                        molestie arcu vel suscipit tincidunt. Nunc non neque risus. Aliquam fringilla sed quam eu
                        condimentum. Nam viverra enim ut iaculis vulputate. Aenean quis laoreet mi. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas vel venenatis
                        magna.
                    </p>
                    <p>
                        Curabitur feugiat sagittis imperdiet. Vestibulum cursus massa sed convallis aliquet. Proin in
                        purus diam. Cras blandit justo in massa imperdiet euismod. Aliquam erat volutpat. Sed quis
                        ornare urna. Cras quis tempus nunc. Vestibulum quis quam a ipsum accumsan gravida in nec arcu.
                        Praesent ut eros eros. Proin vel bibendum eros. In egestas suscipit purus vel efficitur. Proin
                        at elit risus. Nam volutpat massa in lacus bibendum placerat. Suspendisse auctor elit odio, in
                        dapibus risus blandit ut. Sed eu consequat purus.
                    </p>
                    <figure>
                        <img
                            class="w-full aspect-[4/3] object-cover object-center"
                            src="https://picsum.photos/id/390/800/600"
                        />
                        <figcaption>Vivamus ultrices vehicula nunc quis mollis.</figcaption>
                    </figure>
                    <h3>Aliquam eget tortor urna</h3>
                    <p>
                        Sed sit amet fringilla nunc. Proin consequat dui suscipit magna porta blandit. Nam vel felis
                        commodo, mattis sapien ac, laoreet ligula. Vestibulum egestas cursus nulla in tincidunt. Ut
                        efficitur, purus in faucibus mattis, justo enim mollis elit, vitae rutrum sem orci nec mi. Duis
                        tempus mattis elementum. Etiam faucibus et eros vel dictum. Cras ut elit massa. Fusce tristique
                        lacus ac risus pulvinar tempor. Etiam ultricies sit amet lacus sed gravida. Suspendisse potenti.
                        Donec in massa a sem egestas tincidunt eu at sem.
                    </p>
                    <p>
                        Aliquam eget tortor urna. Integer vel tincidunt tellus. Donec ultrices efficitur tortor, vel
                        ullamcorper justo. Proin nec placerat diam, at malesuada metus. Praesent vitae blandit neque.
                        Nulla gravida nulla et molestie placerat. Phasellus porta tortor eu massa laoreet egestas. In
                        sed ultrices magna. Curabitur ut vestibulum metus. Integer porttitor risus at venenatis
                        lobortis. Pellentesque eu libero purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce a cursus leo.
                    </p>
                    <p>
                        Donec at diam ex. In eleifend commodo suscipit. Vivamus ultrices vehicula nunc quis mollis.
                        Aliquam erat volutpat. Nam id dui consectetur, tristique ex non, fermentum dolor. Morbi lorem
                        purus, lobortis at mauris vel, laoreet pretium dolor. Interdum et malesuada fames ac ante ipsum
                        primis in faucibus. Vivamus semper rhoncus augue at facilisis. Pellentesque ut iaculis justo.
                        Suspendisse sed cursus quam. Duis sollicitudin velit vel eros pulvinar egestas. Donec feugiat
                        massa ac dui elementum, quis mollis sem venenatis. Cras euismod, mauris non lobortis pulvinar,
                        dolor risus gravida nisi, eu tristique mauris nulla eget sapien.
                    </p>
                    */}

                    <hr />
                    Published on Aug 26th, 2023 — in <a href="/blog/?category=mountains">Mountains</a>

                    <RenderBlocks blocks={post.footer_blocks} />
                    {/*
                    <div>
                        <h2>See also</h2>

                        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <a class="block relative aspect-[4/3] border bg-gray-100" href="/blog-post">
                                <img
                                    class="absolute top-0 left-0 w-full h-full p-0 m-0 opacity-20 object-center object-cover"
                                    src="https://picsum.photos/id/219/800/600"
                                    alt=""
                                />
                                <div class="relative z-1 p-4">Dolorum libero qui soluta deleniti</div>
                            </a>
                            <a class="aspect-[4/3] p-4 border bg-gray-100" href="/about">
                                {' '}
                                About Us
                            </a>
                        </div>
                    </div>
                    */}
                </div>
            </div>
        </main>
    );
}