'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Application documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AboutImageComponent.html" data-type="entity-link" >AboutImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AboutSectionComponent.html" data-type="entity-link" >AboutSectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BottomGridCardComponent.html" data-type="entity-link" >BottomGridCardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CarouselItemComponent.html" data-type="entity-link" >CarouselItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoriesComponent.html" data-type="entity-link" >CategoriesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoriesHomeComponent.html" data-type="entity-link" >CategoriesHomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CategoryPageComponent.html" data-type="entity-link" >CategoryPageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DoneCircularComponent.html" data-type="entity-link" >DoneCircularComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FeatureItemComponent.html" data-type="entity-link" >FeatureItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FeaturesComponent.html" data-type="entity-link" >FeaturesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GallerySectionComponent.html" data-type="entity-link" >GallerySectionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GridCarouselComponent.html" data-type="entity-link" >GridCarouselComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainButtonComponent.html" data-type="entity-link" >MainButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainLayoutComponent.html" data-type="entity-link" >MainLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MobileViweLinksComponent.html" data-type="entity-link" >MobileViweLinksComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NavbarComponent.html" data-type="entity-link" >NavbarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NxWelcomeComponent.html" data-type="entity-link" >NxWelcomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PopularItemsComponent.html" data-type="entity-link" >PopularItemsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProductItemComponent.html" data-type="entity-link" >ProductItemComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SectionTitleComponent.html" data-type="entity-link" >SectionTitleComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SpecialSliderComponent.html" data-type="entity-link" >SpecialSliderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TallElementGridComponent.html" data-type="entity-link" >TallElementGridComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TrustCompaniesComponent.html" data-type="entity-link" >TrustCompaniesComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/categories.html" data-type="entity-link" >categories</a>
                            </li>
                            <li class="link">
                                <a href="classes/products.html" data-type="entity-link" >products</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MainAdapterService.html" data-type="entity-link" >MainAdapterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslationService.html" data-type="entity-link" >TranslationService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Adapt.html" data-type="entity-link" >Adapt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllCategories.html" data-type="entity-link" >AllCategories</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllProductResponse.html" data-type="entity-link" >AllProductResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AllProductResponseAdapt.html" data-type="entity-link" >AllProductResponseAdapt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CategoryAdapt.html" data-type="entity-link" >CategoryAdapt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FeatureItem.html" data-type="entity-link" >FeatureItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GridBottomItem.html" data-type="entity-link" >GridBottomItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Metadata.html" data-type="entity-link" >Metadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Metadata-1.html" data-type="entity-link" >Metadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductData.html" data-type="entity-link" >ProductData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductResponse.html" data-type="entity-link" >ProductResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductResponseAdapt.html" data-type="entity-link" >ProductResponseAdapt</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SliderItem.html" data-type="entity-link" >SliderItem</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});