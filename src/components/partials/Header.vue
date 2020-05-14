<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark" data-toggle="affix">
    <div class="mx-auto d-sm-flex d-block flex-sm-nowrap">
      <router-link to="/" class="navbar-brand">DoSCG</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse text-center" id="navbarsExample11">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/myapi" class="nav-link">My API</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cv" class="nav-link">CV</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
