import './css/index.css';

import.meta.glob([
  '../templates/_globals/**/*.css',
  '../templates/_pages/**/*.css',
  '../templates/_components/**/*.css',
  '../templates/_patterns/**/*.css',
  '../templates/_blocks/**/*.css'
], { eager: true });

import.meta.glob([
  '../templates/_globals/**/*.js',
  '../templates/_pages/**/*.js',
  '../templates/_components/**/*.js',
  '../templates/_patterns/**/*.js',
  '../templates/_blocks/**/*.js'
], { eager: true });

import './js/index.js'