<template>
  <div class="fd-shellbar">
    <div class="fd-shellbar__group fd-shellbar__group--start">
      <a href="#" class="fd-shellbar__logo">
        <img
          src="//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png"
          srcset="//unpkg.com/fiori-fundamentals/dist/images/sap-logo@2x.png 1x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@3x.png 2x, //unpkg.com/fiori-fundamentals/dist/images/sap-logo@4x.png 3x"
          width="48"
          height="24"
          alt="SAP"
        >
      </a>
      <div class="fd-shellbar__product">
        <span class="fd-shellbar__title">Corporate Portal</span>
      </div>
    </div>
    <div class="fd-shellbar__group fd-shellbar__group--end">
      <div class="fd-shellbar__actions">
        <div class="fd-shellbar__action fd-shellbar__action--collapsible">
          <div class="fd-search-input fd-search-input--closed">
            <div class="fd-popover">
              <div class="fd-popover__control fd-search-input__control">
                <button
                  class="sap-icon--search fd-button--shell"
                  aria-controls="UIO6J688"
                  aria-expanded="false"
                  aria-haspopup="true"
                ></button>
                <div class="fd-search-input__closedcontrol" id="UIO6J688" aria-hidden="true">
                  <div
                    class="fd-search-input__controlinput"
                    aria-controls="QWErK342"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <input
                      type="text"
                      class="fd-input"
                      id="MNBtE660"
                      placeholder="Search products"
                      value="Sear"
                    >
                  </div>
                </div>
              </div>
              <div
                class="fd-popover__body fd-popover__body--no-arrow"
                aria-hidden="true"
                id="QWErK342"
              >
                <div class="fd-search-input__body">
                  <nav class="fd-menu">
                    <ul class="fd-menu__list">
                      <li>
                        <a href="#" class="fd-menu__item">
                          <strong>Sear</strong>ch Result A
                        </a>
                      </li>
                      <li>
                        <a href="#" class="fd-menu__item">
                          <strong>Sear</strong>ch Result B
                        </a>
                      </li>
                      <li>
                        <a href="#" class="fd-menu__item">
                          <strong>Sear</strong>ch Result C
                        </a>
                      </li>
                      <li>
                        <a href="#" class="fd-menu__item">
                          <strong>Sear</strong>ch Result D
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fd-shellbar__action fd-shellbar__action--collapsible">
          <button class="fd-button--shell sap-icon--bell" aria-label="Notifications">
            <span class="fd-counter fd-counter--notification" aria-label="Unread count">25</span>
          </button>
        </div>
        <div class="fd-shellbar__action fd-shellbar__action--collapsible">
          <button class="fd-button--shell sap-icon--pool" aria-label="Pool"></button>
        </div>
        <div class="fd-shellbar__action fd-shellbar__action--collapse">
          <div class="fd-shellbar-collapse">
            <div class="fd-popover fd-popover--right">
              <div class="fd-popover__control">
                <div
                  class="fd-shellbar-collapse--control"
                  aria-controls="CWaGX278"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                >
                  <button
                    class="fd-button--shell sap-icon--overflow"
                    aria-controls="undefined"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="fd-counter fd-counter--notification" aria-label="Unread count">25</span>
                  </button>
                </div>
              </div>
              <div
                class="fd-popover__body fd-popover__body--right"
                aria-hidden="true"
                id="CWaGX278"
              >
                <nav class="fd-menu">
                  <ul class="fd-menu__list">
                    <li>
                      <a role="button" class="fd-menu__item">Search</a>
                    </li>
                    <li>
                      <a role="button" class="fd-menu__item">Notifications</a>
                    </li>
                    <li>
                      <a role="button" class="fd-menu__item">Pool</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="fd-shellbar__action fd-shellbar__action--show-always">
          <div class="fd-user-menu">
            <div class="fd-popover fd-popover--right">
              <div class="fd-popover__control">
                <div
                  class="fd-user-menu__control"
                  aria-controls="DD35G276"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                >
                  <span
                    class="fd-identifier fd-identifier--xs fd-identifier--circle fd-has-background-color-accent-11"
                  >WW</span>
                </div>
              </div>
              <div
                class="fd-popover__body fd-popover__body--right"
                aria-hidden="true"
                id="DD35G276"
              >
                <nav class="fd-menu">
                  <ul class="fd-menu__list">
                    <li>
                      <a role="button" class="fd-menu__item">Settings</a>
                    </li>
                    <li>
                      <a role="button" class="fd-menu__item">Sign Out</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fiori3ShellBar'
}
</script>