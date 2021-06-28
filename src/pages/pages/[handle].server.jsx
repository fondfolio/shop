import React from 'react';
import {useParams} from 'react-router-dom';
import {useShopQuery, RawHtml} from '@shopify/hydrogen';
import Layout from '../../components/Layout.client';
import gql from 'graphql-tag';

export default function Page() {
  const {handle} = useParams();
  const {data} = useShopQuery({query: QUERY, variables: {handle}});

  const page = data.pageByHandle;

  let contentMarkup = null;

  switch (handle) {
    case 'faqs':
      contentMarkup = <FAQs />;
      break;
    default:
  }
  return (
    <Layout>
      <div className="Section--Page">
        <div className="Global__Section Page">
          <div className="Page__Title">
            <h1>{page.title}</h1>
          </div>
          <div className="Page__Content">
            <div className="Format">
              {' '}
              <RawHtml string={page.body} />
            </div>
          </div>
        </div>
        <div className="Format">{contentMarkup}</div>
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query PageDetails($handle: String!) {
    pageByHandle(handle: $handle) {
      title
      body
    }
  }
`;

function FAQs() {
  return (
    <div className="Section--Faqs">
      <section className="Faqs Global__Section">
        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">How do I assemble my Pawzzle?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  <a
                    href="https://pawzzles.cat/pages/instructions"
                    title="Link to our instruction guide"
                  >
                    Check out our full instruction guide.
                  </a>
                  <br />
                  <br />
                  Each Pawzzle is made up of 6 pieces: a top (with 9 holes), a
                  base (no holes), and 4 walls (3 holes).
                </p>
                <p>
                  We recommend starting with the base and adding the walls.
                  First, get all the walls on loosely. Then place on a flat
                  surface and gently press down where the walls meet the base to
                  secure the connections. Once the walls are up and snug, add
                  the top. Give all the joints another gentle-but-firm squeeze
                  to secure the connections and eliminate any visible gaps.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  How many times can I disassemble and reassemble my Pawzzle?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Although you can take your Pawzzle apart and put it back
                  together again, we don’t recommend doing this too often as the
                  connections may become loose — get a hooman puzzle!
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">Do I need to glue my Pawzzle?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Everything should pressure fit together, eliminating the need
                  for glue. However, if you notice the connections become loose,
                  say after your cat swipes it off the shelf for the hundredth
                  time, you can always fix it by adding a spot of wood glue in
                  the joints. Leave overnight to dry before giving it back to
                  your kitty.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">What are the Pawzzle dimensions?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  The Pawzzle is 7.75” (20 cm) square and 2.5” (6.4 cm) in
                  height. The holes are 1.75” (4.5 cm) in diameter. Plenty of
                  space for paws of all sizes.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">What is Fondfolio?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  The main source of material for Pawzzles!{' '}
                  <a
                    href="https://fondfolio.com/"
                    target="_blank"
                    title="Link to our other business, Fondfolio"
                  >
                    Fondfolio
                  </a>{' '}
                  is our other business where we make one of a kind
                  collaborative memory books. They make great gifts for special
                  people and occasions :)
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  This is a lot to spend on a cat toy, can you explain the
                  pricing?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Sure! Each Pawzzle is made by hand and although the materials
                  cost is lower because we’re repurposing scrap material (~$25),
                  the labour cost is not. Each Pawzzle takes us ~1.25 hrs to
                  make — from cutting the parts, assembling the feet, testing
                  and packing (watch our{' '}
                  <a
                    href="https://pawzzles.cat/products/pawzzle"
                    title="Watch our how it&#x27;s made video on our Pawzzles product page"
                  >
                    <em>How It’s Made </em>video
                  </a>
                  ). Right now we’re just a small team of two people, but we
                  believe in fair compensation for time, not merely minimum
                  wage. We also donate 10% of each sale to animal welfare
                  initiatives (
                  <a
                    href="https://pawzzles.cat/pages/giving"
                    title="Read more about our charitable giving"
                  >
                    more about that here
                  </a>
                  ). We believe that companies like Amazon, who use underhanded
                  techniques to{' '}
                  <a
                    href="https://youtu.be/HbxWGjQ2szQ"
                    target="_blank"
                    title="Amazon Rips Off Peak Design’s Camera Bag"
                  >
                    undercut small businesses
                  </a>
                  , have distorted perceptions on the <em>true</em>{' '}
                  <em>cost</em> of a product and think our pricing is fair.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">Can I place a custom order?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  We’re currently not able to support customized Pawzzles. This
                  is something we may consider in the near future though, so
                  email us and let us know what you had in mind!
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">Where do you ship?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>Everywhere!</p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">When will my order arrive?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>Most orders will arrive within 5-7 business days</p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">How do Pawzzles work?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Learning to Pawzzle comes about in three stages: identifying
                  that there is food in the device, usually by smelling it or
                  seeing/hearing you place it there; the desire to obtain it;
                  and finally, trying different ways to access the food. As your
                  cat successfully obtains the food, they will learn that the
                  action that immediately preceded this one they need to try
                  again in order to get more food
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">Do you cover customs charges?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  No, we do not cover customs charges. These fees are,
                  unfortunately, beyond our control.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">Is your packaging sustainable?</span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  There’s nothing worse than ordering a great product and then
                  have it come to you in layers of single-use plastic which you
                  then have to dispose of — kind of takes the joy out of it.
                  <br />
                </p>
                <p>
                  It’s important to us that our packaging is plastic-free and
                  uses only recycled materials. Our padded envelopes are 100%
                  recycled paper. We wrap each Pawzzle in a sheet of recycled
                  tissue (which can be safely composted). We even use paper tape
                  and paper document sleeves so the entire envelope can be put
                  in the recycling.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  What’s the best way to introduce my cat to the Pawzzle?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Let your cat observe the Pawzzle first, from a safe distance,
                  allowing it to determine if it can approach — with caution —
                  to explore further. Don’t push the Pawzzle into their space or
                  place them beside it — cats like to be in control of the
                  situation. If your cat isn’t highly food-motivated we
                  recommend introducing them to the Pawzzle right before you’d
                  normally feed them, when they’re more hungry.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  Do I have to use food in the Pawzzle?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Cats find play rewarding in and of itself so we designed the
                  Pawzzle to accommodate ping-pong balls, small mice and
                  wand-based creatures.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  If I have a Pawzzle does this mean I can spend less time
                  playing with my cat?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  A Pawwzle can help stimulate your cat during times when you
                  can’t play with them, but they shouldn’t be relied on as a
                  substitute for quality interactive play time. Play time is a
                  great opportunity to strengthen your bond.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  My cat is afraid of the Pawzzle and won’t approach, help!
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  If they seem unsure and don’t want to approach you can try
                  luring them over with a treat. A bit of food can be placed on
                  or near the Pawzzle to reward natural exploration.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  My cat has lost interest in the Pawzzle, any advice?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Switch it up! Cats, just like people, become disinterested if
                  they receive the same reward over and over again. So if they
                  stop they might not necessarily be “bored” with playing, they
                  simply need a fresh stimulus to remain motivated — try putting
                  their favourite small toy in the Pawzzle, drag a wand toy or
                  rope through the holes, or try a different treat.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  My cat doesn’t like the treats you included, what should I do?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Cats are sometimes fussy when it comes to food so you may need
                  to experiment to find the treat that best motivates them. The
                  treats we include are Hill’s Prescription Diet — their odd
                  shape is designed to reduce the buildup of plaque & tartar and
                  we’ve found they work well in the Pawzzle.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  What are you doing to reduce your environmental impact?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Pawzzles are made from locally-sourced material that would
                  otherwise go to waste and our packaging is 100% plastic free.
                  We know we could still be doing more, watch this space.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  I want to learn more about how my cat’s brain works! Any tips?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  We highly recommend{' '}
                  <a
                    href="https://www.indiebound.org/book/9780465050901"
                    target="_blank"
                    title="Link to The Trainable Cat book on Indie Bound"
                  >
                    The Trainable Cat
                  </a>{' '}
                  by John Bradshaw and Sarah Ellis.
                </p>
              </p>
            </div>
          </details>
        </div>

        <div className="Faqs__Item">
          <details>
            <summary>
              <p>
                <span className="Link">
                  How many treats should I put in the Pawzzle?
                </span>
              </p>
            </summary>
            <div className="Faqs__Item__Answer">
              <p>
                <p>
                  Make sure you’re not over-feeding your cat by adding Pawzzle
                  sessions to their diet. Less treats will make the Pawzzle more
                  challenging. Start with 3-5 and see how that goes.
                </p>
              </p>
            </div>
          </details>
        </div>
      </section>
    </div>
  );
}
