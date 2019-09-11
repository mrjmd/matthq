const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    text-align: right;
    padding: 4em 4em;
    background-image: url(/assets/overlay.png), url(/assets/bg.jpg);
    background-repeat: repeat, no-repeat;
    background-attachment: scroll, fixed;
    background-size: cover;
    color: rgba(255, 255, 255, 0.5);
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    :host {
        flex: 1;
    }
  }
  img.avatar{
    border-radius: 50%;
    opacity: 1;
  }
  p {
    opacity: 1;
    font-size: 1.75em;
    line-height: 2em;
  }
  p b {
      color: white;
      font-weight: normal;
  }
  a {
    text-decoration: none;
    margin: 0 1em;
  }
  .icon {
    opacity: 0.75;
  }
  div.sections p {
    float: right;
  }
  div.sections a {
    border: 2px solid #e7e7e7;
    padding: 15px 32px;
    text-decoration: none;
    color: #e7e7e7;
  }
  div.sections a:hover {
    color: rgba(255, 255, 255, 0.5);
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
</style>
<div id="header">
    <p class="icons-wrapper">
        <a href="https://twitter.com/johnmattdavis" target="_BLANK" rel="me">
            <img class="icon" height="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/twitter.svg" />
        </a>
        <a href="https://github.com/mrjmd" target="_BLANK" rel="me">
            <img class="icon" height="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/github.svg" />
        </a>
        <a href="mailto:matt@changelabs.io" rel="me">
            <img class="icon" height="32" width="32" src="https://unpkg.com/simple-icons@latest/icons/gmail.svg" />
        </a>
        </p>
    <p><a href="https://www.matthq.com"><img class="avatar" src="/assets/matt.jpg" alt="Photo of Matt" /></a></p>
    <p><b>Matt Davis</b> here, I explore <br />
    technology and possibility.
    </p>
    <div class="sections">
        <p><a href="/photos.html">Photos</a></p>
        <p><a href="/about.html">About Me</a></p>
    </div>
</div>
`

class MattHeader extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

if (!window.customElements.get('matt-hq-header')) {
  window.customElements.define('matt-hq-header', MattHeader)
}
