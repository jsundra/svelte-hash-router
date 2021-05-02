<script lang="ts">
    import { onMount } from 'svelte';

    export let routes;
    let route;

    onMount(() => {
        window.addEventListener('hashchange', () => {
            navigate(location.hash);
        }, false);

        navigate(location.hash);
    });

    function navigate(path: string) {
        if (!path) {
            path = '#/';
            location.replace(`${location.href}${path}`);
        }
        
        if (path.startsWith('#')) path = path.substring(1);

        route = routes[path];
        if (!route) routes['/'];
    }
</script>

<svelte:component this={route} />