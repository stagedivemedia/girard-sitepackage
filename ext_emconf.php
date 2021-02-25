<?php

/**
 * Extension Manager/Repository config file for ext "girard".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'girard',
    'description' => 'Girard.at – Therapiehunde mit Herz',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
            'rte_ckeditor' => '8.7.0-9.5.99',
            'bootstrap_package' => '10.0.0-10.0.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Stagedivemedia\\Girard\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Marksu Steiner | stagedive.media',
    'author_email' => 'office@stagedive.media',
    'author_company' => 'stagedive.media',
    'version' => '1.0.0',
];
