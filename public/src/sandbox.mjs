export async function sandbox() {
  let html =
    '<div class="select-pills_selectPillsContainer__GPnU_"><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-3"><input name="categoryId" type="radio" aria-label="Animals" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="animals" id="categoryId-3" value="3">Animals<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-5"><input name="categoryId" type="radio" aria-label="Business" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="business" id="categoryId-5" value="5">Business<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-7"><input name="categoryId" type="radio" aria-label="Community" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="community" id="categoryId-7" value="7">Community<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-19"><input name="categoryId" type="radio" aria-label="Competitions" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="competitions" id="categoryId-19" value="19">Competitions<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-8"><input name="categoryId" type="radio" aria-label="Creative" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="creative" id="categoryId-8" value="8">Creative<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-17"><input name="categoryId" type="radio" aria-label="Education" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="education" id="categoryId-17" value="17">Education<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-2"><input name="categoryId" type="radio" aria-label="Emergencies" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="emergencies" id="categoryId-2" value="2">Emergencies<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-342"><input name="categoryId" type="radio" aria-label="Environment" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="environment" id="categoryId-342" value="342">Environment<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-6"><input name="categoryId" type="radio" aria-label="Events" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="events" id="categoryId-6" value="6">Events<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-12"><input name="categoryId" type="radio" aria-label="Faith" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="faith" id="categoryId-12" value="12">Faith<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-4"><input name="categoryId" type="radio" aria-label="Family" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="family" id="categoryId-4" value="4">Family<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-9"><input name="categoryId" type="radio" aria-label="Funerals &amp; Memorials" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="memorials" id="categoryId-9" value="9">Funerals &amp; Memorials<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-11"><input name="categoryId" type="radio" aria-label="Medical" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="medical" id="categoryId-11" value="11">Medical<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-344"><input name="categoryId" type="radio" aria-label="Monthly Bills" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="monthly bills" id="categoryId-344" value="344">Monthly Bills<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-14"><input name="categoryId" type="radio" aria-label="Newlyweds" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="newlyweds" id="categoryId-14" value="14">Newlyweds<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-15"><input name="categoryId" type="radio" aria-label="Other" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="other" id="categoryId-15" value="15">Other<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-16"><input name="categoryId" type="radio" aria-label="Sports" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="sports" id="categoryId-16" value="16">Sports<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-10"><input name="categoryId" type="radio" aria-label="Travel" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="travel" id="categoryId-10" value="10">Travel<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-8572463"><input name="categoryId" type="radio" aria-label="Ukraine Relief" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="ukraine" id="categoryId-8572463" value="8572463">Ukraine Relief<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-18"><input name="categoryId" type="radio" aria-label="Volunteer" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="volunteer" id="categoryId-18" value="18">Volunteer<div class="select-pills_selectPillsPillOutline__BvTll"></div></label><label class="select-pills_selectPillsPill__Qo7pJ" for="categoryId-20"><input name="categoryId" type="radio" aria-label="Wishes" class="select-pills_selectPillsInputHidden__OGU_S" data-tracking-id="wishes" id="categoryId-20" value="20">Wishes<div class="select-pills_selectPillsPillOutline__BvTll"></div></label></div>';
}
