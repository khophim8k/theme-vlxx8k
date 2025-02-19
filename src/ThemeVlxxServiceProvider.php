<?php

namespace Kho8k\ThemeVlxx;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class ThemeVlxxServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->setupDefaultThemeCustomizer();
    }

    public function boot()
    {
        $this->loadViewsFrom(__DIR__ . '/../resources/views/', 'themes');

        $this->publishes([
            __DIR__ . '/../resources/assets' => public_path('themes/vlxx')
        ], 'vlxx-assets');
    }

    protected function setupDefaultThemeCustomizer()
    {
        config(['themes' => array_merge(config('themes', []), [
            'vlxx' => [
                'name' => 'Theme VLXX',
                'author' => 'kho8k@gmail.com',
                'package_name' => 'kho8k/theme-vlxx8k',
                'publishes' => ['vlxx-assets'],
                'preview_image' => '',
                'options' => [
                    [
                        'name' => 'recommendations_limit',
                        'label' => 'Recommended movies limit',
                        'type' => 'number',
                        'value' => 10,
                        'wrapperAttributes' => [
                            'class' => 'form-group col-md-4',
                        ],
                        'tab' => 'List'
                    ],
                    [
                        'name' => 'per_page_limit',
                        'label' => 'Pages limit',
                        'type' => 'number',
                        'value' => 20,
                        'wrapperAttributes' => [
                            'class' => 'form-group col-md-4',
                        ],
                        'tab' => 'List'
                    ],
                    [
                        'name' => 'movie_related_limit',
                        'label' => 'Movies related limit',
                        'type' => 'number',
                        'value' => 10,
                        'wrapperAttributes' => [
                            'class' => 'form-group col-md-4',
                        ],
                        'tab' => 'List'
                    ],
                    [
                        'name' => 'latest',
                        'label' => 'Home Page',
                        'type' => 'code',
                        'hint' => 'display_label|relation|find_by_field|value|limit|show_more_url',
                        'value' => "Phim sex mới||is_copyright|0|30|/danh-sach/phim-moi",
                        'attributes' => [
                            'rows' => 5
                        ],
                        'tab' => 'List'
                    ],
                    [
                        'name' => 'hotest',
                        'label' => 'Danh sách hot',
                        'type' => 'code',
                        'hint' => 'Label|relation|find_by_field|value|sort_by_field|sort_algo|limit',
                        'value' => "",
                        'attributes' => [
                            'rows' => 5
                        ],
                        'tab' => 'List'
                    ],
                    [
                        'name' => 'additional_css',
                        'label' => 'Additional CSS',
                        'type' => 'code',
                        'value' => "<style>img.logoiframe {width: 15%;position: absolute;top: 2%;left: 3%;background-color: #00000010;z-index: 100;}</style>",
                        'tab' => 'Custom CSS'
                    ],
                    [
                        'name' => 'body_attributes',
                        'label' => 'Body attributes',
                        'type' => 'text',
                        'value' => 'class="home blog"',
                        'tab' => 'Custom CSS'
                    ],
                    [
                        'name' => 'additional_header_js',
                        'label' => 'Header JS',
                        'type' => 'code',
                        'value' => "",
                        'tab' => 'Custom JS'
                    ],
                    [
                        'name' => 'additional_body_js',
                        'label' => 'Body JS',
                        'type' => 'code',
                        'value' => <<<HTML
                        <script>
                            document.addEventListener("DOMContentLoaded", function() {
                                setTimeout(function() {
                                    var playerDiv = document.getElementById("playcontainer");

                                    if (playerDiv) {
                                        var imgElement = document.createElement("img");
                                        imgElement.src = "/storage/images/logovl.png";  // Đường dẫn hình ảnh
                                        imgElement.alt = "logo";  // Thuộc tính alt của ảnh
                                        imgElement.className = "logoiframe";  // Thêm class 'logoiframe'
                                        playerDiv.appendChild(imgElement);
                                    }
                                }, 500); // Chờ 1 giây sau khi script trước đã thực thi
                            });
                        </script>
                        <script>
                        var catfishDiv = `<div class="custom-banner-video">
                                                <div class="banner-ads">
                                                </div>
                                            </div>
                                            <style>
                                            .custom-banner-video {
                                                text-align: center;
                                                margin: 5px;
                                            }
                                            </style>
                                            `;
                                            var headerDiv = `
                                            <div class="custom-banner-video">
                                                <div class="banner-ads">
                                                </div>
                                            </div>
                                            <style>
                                            .custom-banner-video {
                                                text-align: center;
                                                margin: 5px;
                                            }
                                            
                                            </style>`;

                        var targetBottomElement = document.querySelector(".dooplay_player");
                        var targetTopElement = document.querySelector(".dooplay_player");
                        if (targetBottomElement) {
                            targetBottomElement.insertAdjacentHTML("afterend", catfishDiv);
                        }
                        if (targetTopElement) {
                            targetTopElement.insertAdjacentHTML("afterbegin", headerDiv);
                        }
                        </script>
                        HTML,
                        'tab' => 'Custom JS'
                    ],
                    [
                        'name' => 'additional_footer_js',
                        'label' => 'Footer JS',
                        'type' => 'code',
                        'value' => "",
                        'tab' => 'Custom JS'
                    ],
                    [
                        'name' => 'footer',
                        'label' => 'Footer',
                        'type' => 'code',
                        'value' => <<<EOT
                        <div id="footer">
                            <div class="container">
                                <div class="content">
                                    <div class="views-row">
                                        <div class="copy-right">
                                            Website xem phim của chúng tôi được tổng hợp và sưu tầm trên Internet. Chúng tôi không chịu trách nhiệm đối với bất kỳ nội dung nào được đăng tải trên trang web này.<br>
                                            Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.<br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        EOT,
                        'tab' => 'Custom HTML'
                    ],
                    [
                        'name' => 'ads_header',
                        'label' => 'Ads header',
                        'type' => 'code',
                        'value' => <<<EOT
                        
                        EOT,
                        'tab' => 'Ads'
                    ],
                    [
                        'name' => 'ads_catfish',
                        'label' => 'Ads catfish',
                        'type' => 'code',
                        'value' => <<<EOT
                        
                        EOT,
                        'tab' => 'Ads'
                    ]
                ],
            ]
        ])]);
    }
}
