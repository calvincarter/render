\echo 'Delete and recreate tarot db?'
\prompt 'Return for yes or control-C to cancel > '

DROP DATABASE tarot;
CREATE DATABASE tarot;
\connect tarot

\i tarot-schema.sql