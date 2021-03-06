const html = `
  <div class="col l3 m4 s6 %catagory% filter">
    <div class="card sticky-action" style="overflow:hidden">
      <div
        style="position:relative;overflow:visible"
        class="card-image waves-effect waves-block waves-light"
      >
        <button class="btn-floating halfway-fab cart waves-effect waves-light red">
          <i class="material-icons">add</i>
        </button>
        <img
          draggable="false"
          style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)"
          src="%image%"
          alt="%title%"
        />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          %title%<i class="material-icons right">more_vert</i>
        </span>
        <p>
          <a class="link" href="../ProductInfo/index.html?id=%index%">
            View More
          </a>
        </p>
      </div>
      <div class="card-action">%price%</div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          %title%<i class="material-icons right">close</i>
        </span>
        <ul>%description%</ul>
      </div>
    </div>
  </div>`;
export default html;
