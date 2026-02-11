/**
 * Region Selector Composable
 * 管理区域选择、本地存储和事件派发
 */
import { ref, computed, watch, onMounted } from 'vue';
import { getRegionById, regions } from '@/data/regions';
const LOCAL_STORAGE_KEY = 'sales-touch-region';
const REGION_SELECTED_EVENT = 'region-selected';
export function useRegionSelector() {
    // State
    const selectedRegion = ref('global');
    const savedRegion = ref(null);
    const isLoading = ref(false);
    // Computed
    const currentRegion = computed(() => {
        return getRegionById(selectedRegion.value);
    });
    const currency = computed(() => {
        return currentRegion.value?.currency || 'USD';
    });
    const currencySymbol = computed(() => {
        return currentRegion.value?.currencySymbol || '$';
    });
    const successStories = computed(() => {
        return currentRegion.value?.successStories;
    });
    const pricing = computed(() => {
        return currentRegion.value?.pricing;
    });
    const hero = computed(() => {
        return currentRegion.value?.hero;
    });
    const features = computed(() => {
        return currentRegion.value?.features;
    });
    const caseStudies = computed(() => {
        return currentRegion.value?.caseStudies;
    });
    // Methods
    const selectRegion = (regionId) => {
        isLoading.value = true;
        // Update state
        selectedRegion.value = regionId;
        // Save to localStorage
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, regionId);
            savedRegion.value = regionId;
        }
        catch (error) {
            console.error('Failed to save region preference:', error);
        }
        // Dispatch event
        window.dispatchEvent(new CustomEvent(REGION_SELECTED_EVENT, {
            detail: { regionId }
        }));
        // Simulate loading state
        setTimeout(() => {
            isLoading.value = false;
        }, 500);
        console.log('Region selected:', regionId);
        console.log('Currency:', currency.value);
    };
    const clearRegionPreference = () => {
        try {
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            savedRegion.value = null;
            selectedRegion.value = 'global';
        }
        catch (error) {
            console.error('Failed to clear region preference:', error);
        }
    };
    const getRegionPreference = () => {
        try {
            return localStorage.getItem(LOCAL_STORAGE_KEY);
        }
        catch (error) {
            console.error('Failed to get region preference:', error);
            return null;
        }
    };
    const isRegionSelected = (regionId) => {
        return selectedRegion.value === regionId;
    };
    // Lifecycle
    onMounted(() => {
        // Load saved region
        const saved = getRegionPreference();
        if (saved) {
            selectedRegion.value = saved;
            savedRegion.value = saved;
        }
        // Listen for region change events
        window.addEventListener(REGION_SELECTED_EVENT, ((event) => {
            const { regionId } = event.detail;
            selectedRegion.value = regionId;
        }));
    });
    // Watch for region changes
    watch(selectedRegion, (newRegionId, oldRegionId) => {
        if (newRegionId !== oldRegionId) {
            console.log('Region changed from', oldRegionId, 'to', newRegionId);
            // Update document title
            const region = getRegionById(newRegionId);
            if (region) {
                document.title = `${region.name} - SalesTouch`;
            }
        }
    });
    return {
        // State
        selectedRegion,
        currentRegion,
        currency,
        currencySymbol,
        isLoading,
        // Data accessors
        regions,
        hero,
        features,
        successStories,
        pricing,
        caseStudies,
        // Methods
        selectRegion,
        clearRegionPreference,
        getRegionPreference,
        isRegionSelected,
        // Computed helpers
        getRegionById,
        getRegionIds: () => regions.map((r) => r.id),
    };
}
export default useRegionSelector;
