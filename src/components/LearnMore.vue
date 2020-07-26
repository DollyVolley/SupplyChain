<template>
  <div class="container" id="learn-more">
    <h1 class="title">Learn More</h1>
    <br>
    <hr>
    <p class="subtext">
      I strongly recommend recommend to read this article
      <a href="https://medium.com/coinmonks/iota-mam-eloquently-explained-d7505863b413">"IOTA: MAM Eloquently Explained"</a>.</p>
      <p>
        It really breaks down the tech and from there concludes which and why MAM has this properties.
        Note, that MAM is not a work in progress but is being replaced by rework from scratch
        <a href="https://blog.iota.org/iota-streams-alpha-7e91ee326ac0">"IOTA Streams alpha"</a>
        which implements many more
        features and cryptographic tools.
    </p>

    <br>
    <h3 class="subtitle">The Tangle does not store your data</h3>
    <br>
    <p>
      The Tangle is not a persistent way of data storage. It keeps the data until the next
      <a href="https://www.iota-wiki.com/de/#Was_ist_ein_Snapshot">Snapshot</a> where it gets
      pruned on the node. One could bypass this by using <a href="https://docs.iota.org/docs/chronicle/1.0/overview">Chronicle</a>
      or just drop the idea of a network as a storage device. The message owner is verifiable using the signature contained in
      the message. These messages also contain timestamp and sequence number. Therefore we just need to fetch the
      MAM messages from the Tangle and evaluate the payload in sequence order and save it afterwards to a database or your own solution.
      This means already via using the Streams/MAM protocol data integrity and authenticity are given.
    </p>

    <br>
    <h3 class="subtitle" id="privacy_faq">Does it provide privacy?</h3>
    <br>
    <p>Each MAM state is stored not on the same, but many different addresses in the network.
      The addresses are pseudo random and depend on the initial seed of the mam channel.

      This means that you will have a hard time finding connected messages just by chance.
      Since we somehow need to navigate an retrieve the MAM states  from these addresses, each message refers to all
      messages following the current one. This could still be problematic, because your data is visible the whole
      network and popping up here and there on addresses. For this reason, all channels are encrypted.
      The key depends on the MAM mode. Short summary:
    </p>
    <br>
    <ul>
      <li>
        public: <p>If you know the address - you can read it and all following states. Not hard to decrypt because the
      you know the key when you know where the state is. But since you do not know which mode a state has, it obscures
      it for everyone not knowing it.</p>
      </li>
      <li>
        restricted: <p>If you know the address - you need to know the side key, which is used for encryption.
      The side key may change for messages, allowing to prevent the access to parties who previously had access</p>
      </li>
      <li>
        private: <p>If you know the address - you need to know the the root to decrypt it.
      Since the address is the hash of the root, this is trivial and a tough nut for everyone else.</p>
      </li>
    </ul>

    <p>
      Using message headers, it allows one to include different semantics split the semantics in a single channel by creating
      a message type. This means in the same channel the data is send, also the business logic and much more can flow.
      With IOTA Streams we are also able encrypt the message based on the header type and thus specify who we allow it to see.
    </p>

    <br>
    <h3 class="subtitle">Close the circle</h3>
    <br>
    <p>This is of course unidirectional, but it can be extended by using a either a standard
      (<a href="https://eclass.iota.org/">eCl@ass</a> / <a href="https://iota-einsteiger-guide.de/object-management-group-omg.html>eCl@ass">OMG</a>)
      or a custom communication protocol. In theory there limitations and a fully connected network is possible.
      Everyone can follow every channel of which he knows the root and the side key if necessary.
      Therefor theoretically even a fully connected network as layer on top of MAM/Streams is possible.
    </p>

    <br>

    <p> As with most established DLTs you can utilize listeners to implement push messages.
      This makes comes in handy when aggregating data which can then be used for monitoring and even alarm you about escalation
      processes or quality metrics. With a single source of truth for a specific asset auditing can easily be supported.
      Break your data silos!
    </p>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>

  ul {
    color: white;
  }
  li {
    margin-bottom: 15px;
  }

  a {
    color: lightgoldenrodyellow;
    font-size: 12pt;
    vertical-align: baseline;
    text-decoration: underline;
  }

  a:hover {
    color:yellow;
  }

  #learn-more {
    width: 100%;
    min-height:150vh;
    background: #345695;
    background-image: linear-gradient(#345695, #274371);
    padding: 40px;
  }

  .title {
    color:white;
  }

  p {
    color: white;
    margin: 0;
  }

  .subtitle {
    color: white;
    margin-top: 1em;
  }

  hr { display: block; height: 1px;
    border: 0; border-top: 1px solid #ccc;
    margin: 1em 0; padding: 0; }


</style>

