<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Character Details • Lumenrise Gallery</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <div class="navbar">
      <div class="brand">
        <div class="logo" aria-hidden="true"></div>
        <span>Lumenrise Gallery</span>
      </div>
      <nav>
        <a class="navlink" href="index.html">Home</a>
        <a class="navlink active" href="details.html">Details</a>
        <a class="navlink" href="about.html">About</a>
        <a class="navlink" href="form.html">Form</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="section">
      <div class="detail-header">
        <img id="img" src="" alt="" />
        <div>
          <h2 id="name">Character Name</h2>
          <p><strong>Alias:</strong> <span id="alias"></span></p>
          <p id="summary"></p>
          <div class="actions" style="margin-top:10px;">
            <a class="btn primary" href="index.html">Back to Home</a>
            <a class="btn" href="about.html">About this project</a>
            <a class="btn" href="form.html">Submit a new character</a>
          </div>
        </div>
      </div>
    </section>

    <div class="kv" style="margin-top:14px;">
      <section class="section">
        <h3 style="margin-top:0;">Profile</h3>
        <dl>
          <div>
            <dt>Role</dt>
            <dd id="role"></dd>
          </div>
          <div>
            <dt>Faction</dt>
            <dd id="faction"></dd>
          </div>
          <div>
            <dt>Power</dt>
            <dd id="power"></dd>
          </div>
          <div>
            <dt>Weakness</dt>
            <dd id="weakness"></dd>
          </div>
          <div>
            <dt>First Appearance</dt>
            <dd id="first"></dd>
          </div>
        </dl>
      </section>

      <section class="section">
        <h3 style="margin-top:0;">Background</h3>
        <p id="bio" style="color:var(--muted); margin-top:0;"></p>

        <h4>Explore other characters</h4>
        <div class="actions" id="other"></div>
      </section>
    </div>
  </main>

  <footer>
    Tip: you can open different characters by adding <code>?id=character-id</code> to the URL.
  </footer>

  <script src="details.js"></script>
</body>
</html>
